import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'hometab', title: 'ListOfArticle', icon: 'assignment' },
  { path: 'detail/:id', title: 'Detail', icon: 'info outline' },
  { path: 'addnew', title: 'Addnew', icon: 'person add' },
  { path: 'signup', title: 'SignUp', icon: 'plus one' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})

export class SideBarComponent implements OnInit {
  menuItems: any[];
  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
