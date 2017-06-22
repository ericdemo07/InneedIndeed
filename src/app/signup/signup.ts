import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../_services/default_service';
import { User } from '../_model/user';

@Component({
  moduleId: module.id,
  templateUrl: 'signup.html',
  styleUrls: ['signup.css']
})

export class SignUpComponent {
  user = new User('', '', '', '', '', null, '', '', null, '', '', '', null, '', null, null);
  password1: string = '';
  password2: string = '';
  flagSignUp: boolean = false;

  constructor(private defaultService: DefaultService) { }

  updateSignUpTrue() {
    this.flagSignUp = true;
  }

  updateSignUpFalse() {
    this.flagSignUp = false;
  }
}
