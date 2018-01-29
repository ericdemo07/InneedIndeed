 import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DefaultService } from './_services/default_service';
import { LoginService } from './_services/login_service';
import { Router } from '@angular/router'

@Component({
  // moduleId: module.id,
  selector: 'app', //this is same as given in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DefaultService,
    LoginService]
})
export class AppComponent {
  title = 'GreyPages';
  // routeLinks: any[];
  // activeLinkIndex = 0;
  // constructor(private router: Router) {
  //   this.routeLinks = [
  //     { label: 'Home', link: 'hometab' },
  //     { label: 'AddNew', link: 'addnew' }];
  // }
}
