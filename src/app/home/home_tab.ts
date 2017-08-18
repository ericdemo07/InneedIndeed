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
        //  console.log("Hello test  "+response);
        var length = JSON.parse(response).message.length;
        console.log("\n\n\nHello test 111 " + JSON.parse(response).message.length);
        for (var i = 0; i < length; i++) {
          //this.listOfPerson[i] = JSON.parse(response).message[i];
          console.log("\n\n" + i + "\n\n" + JSON.parse(response).message[i]);
        }
        //next line nopt giving expected result have to use setters
        //    var myObjArray : Person[] = JSON.parse(response).message;
        //  console.log(myObjArray[0]);
        //  console.log(myObjArray[0].getImg);
        //  console.log(myObjArray[0].getImg());

        //MapUtils.deserialize(Person, JSON.parse(response).message);
      });
  }
}
