import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'hometab', title: 'Home1',  icon:'person', class: '' },
    { path: 'detail/:id', title: 'Detail',  icon:'content_paste', class: '' },
    { path: 'addnew', title: 'Addnew',  icon:'library_books', class: '' },
    { path: 'addnew/:id', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'signup', title: 'SignUp',  icon:'location_on', class: '' }
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
