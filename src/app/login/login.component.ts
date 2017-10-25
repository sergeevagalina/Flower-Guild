import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';
import { Login } from '../shared/login';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  login = new Login;
  user: User;
  subscription: Subscription;


  constructor(private userservice: UserService,
    public dialog: MdDialog) {
      this.subscription = this.userservice.getCurrentUser()
        .subscribe(user => this.user = user);
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(loginForm: any) {
    const email = this.login.email.replace(/@/g, '%40');
      this.userservice.getUser(email)
      .subscribe(user => {
        if (user[0].password === this.login.password) {
          // this.user = user[0];
          console.log(user[0]);
          this.userservice.sendCurrentUser(user[0]);
          loginForm.reset();
        } else {
          alert('Неверный пароль');
        }
      }, err => console.log(err));
  }


  exit() {
    this.user = null;
    console.log(this.user);
  }

  openSignupForm() {
    this.dialog.open(SignupComponent, {
      width: '470px',
      height: '500px'
    });
  }


    private newFunction(email: string) {
        return this.userservice.getUser(email);
    }
}
