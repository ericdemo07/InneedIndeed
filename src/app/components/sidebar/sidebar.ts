import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'hometab', title: 'ListOfArticle', icon: 'assignment' },
  // { path: 'detail/*', title: 'Detail', icon: 'info outline' },
  //TODO:double word icon are displaying wrong
  { path: 'addnew', title: 'Add Article', icon: 'face' },
  { path: 'signup', title: 'SignUp', icon: 'input' }
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
