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
  test(): void {
    this.defaultService.getInneedAsList().then(
      function(response) {
        console.log("Hello test 111");
        var myObjArray : Person[] = JSON.parse(response).message;
        console.log(typeof myObjArray[0]);
        console.log(typeof myObjArray[0].getFullName);
        //MapUtils.deserialize(Person, JSON.parse(response).message);
      });
  }
}
