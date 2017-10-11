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
    console.log(this.login);
    this.userservice.getUser(this.login.email, this.login.password)
      .subscribe(user => {
        this.user = user[0];
        console.log(this.user);
        loginForm.reset();
      });
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

}
