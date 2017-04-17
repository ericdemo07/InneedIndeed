import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { InneedCommonService } from './inneedcommon.service';

@Component({
    moduleId: module.id,
    selector: 'bitool-app', //this is same as given in index page
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/inneedhome" routerLinkActive="active">Inneed Home</a>
      <a routerLink="/search"  routerLinkActive="active">Advance Inneed Search</a>
      <a routerLink="/detail"  routerLinkActive="active">Inneed Detail</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
    providers: [InneedCommonService]
})
export class AppComponent {
    title = 'Inneed Indeed';
}
