import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DefaultService } from './_services/default_service';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app', //this is same as given in index page
  template: `

    <!--<h1>{{title}}</h1> -->
<!--    <nav>
      <a routerLink="/hometab" routerLinkActive="active">Home</a>
      <a routerLink="/detail"  routerLinkActive="active">Detail</a>
      <a routerLink="/addnew"  routerLinkActive="active">AddNew</a>
    </nav> -->
    <nav md-tab-nav-bar aria-label="">
         <a md-tab-link
            *ngFor="let routeLink of routeLinks; let i = index"
            [routerLink]="routeLink.link"
            [active]="activeLinkIndex === i"
            (click)="activeLinkIndex = i">
           {{routeLink.label}}
         </a>
         <button md-button [routerLink]="['/signup']" class = "right">Sign In</button>
    </nav>
       <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [DefaultService]
})
export class AppComponent {
  title = 'YellowPages';
  routeLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'Home', link: 'hometab' },
      { label: 'AddNew', link: 'addnew' }];
  }
}
