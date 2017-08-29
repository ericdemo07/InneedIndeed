import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../_services/default_service';
import { Person } from '../_model/person';

@Component({
  moduleId: module.id,
  templateUrl: 'home_tab.html',
  styleUrls: ['home_tab.css']
})

export class HomeTabComponent {
  listOfPerson1?: Person[];
  person1:Person;
  constructor(private defaultService: DefaultService) { this.listOfPerson1 = new Array<Person>();  }
  listOfPerson: Person[];

  getHeroes(): void {
    this.defaultService.getInneedAsList1().then(listOfPerson11 => this.listOfPerson = listOfPerson11);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  test(): void {
    var listOfPersonGet: Person[] = [];
    this.defaultService.getInneedAsList().then(
      function(response) {
        var length = response.message.length;
        var person;
        for (var i = 0; i < 1; i++) {
          person = new Person(response.message[i]._id, response.message[i].firstName, response.message[i].lastName, response.message[i].city, response.message[i].state,
            response.message[i].postalCode, response.message[i].addressLine1, response.message[i].addressLine2, response.message[i].donationAmount,
            response.message[i].content, response.message[i].img, response.message[i].mailId, response.message[i].phone,
            response.message[i].representativeId, response.message[i].likesCount, response.message[i].shareCount, response.message[i].dob);
          console.log("\n\n" + i + "\n\n" + person.getFullName());
          listOfPersonGet.push(person);
        }
        console.log(listOfPersonGet.length);
        console.log(listOfPersonGet[0]);
      //  person1 => this.person1 = listOfPersonGet[0];
        //console.log(this.listOfPerson1[0]);
      //  return
      }
    );
  }
}
