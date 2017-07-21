import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../_services/default_service';
import { Person } from '../_model/person';

@Component({
  moduleId: module.id,
  templateUrl: 'home_tab.html',
  styleUrls: ['home_tab.css']
})

export class HomeTabComponent {
  constructor(private defaultService: DefaultService) { }
  listOfPerson: Person[];
  getHeroes(): void {
    this.defaultService.getInneedAsList1().then(listOfPerson => this.listOfPerson = listOfPerson);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  test(): void{
    this.defaultService.getInneedAsList();
  }
}
