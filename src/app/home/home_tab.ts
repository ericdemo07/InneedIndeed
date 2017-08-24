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
    var listOfPersonGet: Person[] = [];
    //a.push("doom");
    this.defaultService.getInneedAsList().then(
      function(response) {
        //  console.log("Hello test  "+response);
        var length = response.message.length;
        //console.log("\n\n\nHello test 111 " + JSON.parse(response).message.length);
        console.log("\n\n" + 0 + "\n\n" + response.message.length);
        var person;
        for (var i = 0; i < 1; i++) {
          //this.listOfPerson[i] = JSON.parse(response).message[i];
          person = new Person(response.message[i]._id, response.message[i].firstName, response.message[i].lastName, response.message[i].city, response.message[i].state,
            response.message[i].postalCode, response.message[i].addressLine1, response.message[i].addressLine2, response.message[i].donationAmount,
            response.message[i].content, response.message[i].img, response.message[i].mailId, response.message[i].phone,
            response.message[i].representativeId, response.message[i].likesCount, response.message[i].shareCount, response.message[i].dob);
          console.log("\n\n" + i + "\n\n" + JSON.stringify(response.message[i]));
          console.log("\n\n" + i + "\n\n" + person.getFullName());
          listOfPersonGet.push(person);
        }
console.log(listOfPersonGet.length);
        //next line nopt giving expected result have to use setters
        //    var myObjArray : Person[] = JSON.parse(response).message;
        //  console.log(myObjArray[0]);
        //  console.log(myObjArray[0].getImg);
        //  console.log(myObjArray[0].getImg());

        //MapUtils.deserialize(Person, JSON.parse(response).message);
      });
  }
}
