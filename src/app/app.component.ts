import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BiToolCommonService } from './bitoolcommon.service';

@Component({
    moduleId: module.id,
    selector: 'bitool-app', //this is same as given in index page
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/inneedhome" routerLinkActive="active">Inneed Home</a>
      <a routerLink="/search"  routerLinkActive="active">Advance Inneed Search</a>
    <!--  <a routerLink="/jobstatus" style=" pointer-events: none;cursor: default;" routerLinkActive="active">Job Status</a> -->
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
    providers: [BiToolCommonService]
})
export class AppComponent {
    title = 'Inneed Indeed';
}
