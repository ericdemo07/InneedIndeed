import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login_service';
import { User } from '../_model/user';

@Component({
  templateUrl: 'signup.html',
  styleUrls: ['signup.css']
})

export class SignUpComponent {
  private existingUserFlag: true;
  user = new User('', '', '', '', null, '');
  passwordformatch: string = '';

  constructor(private loginService: LoginService) { }

  signup() {
    if (this.passwordformatch != this.user.getPassword()) {
      console.log("password mismatch");
    }
    else {
      this.loginService.matchUser(this.user);
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

  isNumeric(value: any) {
    return /^\d+$/.test(value);
  }
}
