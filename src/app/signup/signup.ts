import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login_service';
import { User } from '../_model/user';

@Component({
  moduleId: module.id,
  templateUrl: 'signup.html',
  styleUrls: ['signup.css']
})

export class SignUpComponent {
  user = new User('', '', '', '', null, '');
  passwordformatch: string = '';
  flagSignUp: boolean = false;

  constructor(private loginService: LoginService) { }

  updateSignUpTrue() {
    this.flagSignUp = true;
  }

  updateSignUpFalse() {
    this.flagSignUp = false;
  }

  signup() {
    if (this.passwordformatch != this.user.getPassword()) {
      console.log("password mismatch");
    }
  }

  login() {
    if (this.isNumeric(this.user.getMailId())) {
      this.user.setPhone(this.user.getMailId());
    }

    console.log("\n\nlogin Mailid [" + this.user.getMailId() + "login Phone [" + this.user.getPhone());
    console.log("login password [" + this.user.getPassword());
    this.loginService.matchUser(this.user);
    this.user = new User('', '', '', '', null, '');

  }

  isNumeric(value:any) {
    return /^\d+$/.test(value);
  }
}
