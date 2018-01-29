import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DefaultService } from './_services/default_service';
import { LoginService } from './_services/login_service';
import { Router } from '@angular/router'

@Component({
  selector: 'app', //this is same as given in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DefaultService,
    LoginService]
})
export class AppComponent {
  title = 'GreyPages';
}
