import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DefaultService } from './_services/default_service';

@Component({
    moduleId: module.id,
    selector: 'app', //this is same as given in index page
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/hometab" routerLinkActive="active">Home</a>
  <!--    <a routerLink="/search"  routerLinkActive="active">Advance Inneed Search</a> -->
      <a routerLink="/detail"  routerLinkActive="active">Detail</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
    providers: [DefaultService]
})
export class AppComponent {
    title = 'YellowPages';
}
