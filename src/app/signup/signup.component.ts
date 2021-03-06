import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = new User;

  constructor(public dialogRef: MdDialogRef<SignupComponent>,
    private userservice: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.user.email.replace(/@/g, '%40');
    this.userservice.submitUser(this.user)
      .subscribe(user => {
        console.log(user);
        this.userservice.sendCurrentUser(user);
      });
    this.dialogRef.close();
  }

}
