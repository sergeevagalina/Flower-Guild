import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User;

  constructor(public dialogRef: MdDialogRef<LoginComponent>,
    private userservice: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userservice.submitUser(this.user)
      .subscribe(user => console.log('отправлено' + user));
    this.dialogRef.close();
  }

}
