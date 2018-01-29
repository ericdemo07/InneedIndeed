import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../_services/default_service';
import { Person } from '../_model/person';

@Component({
  // moduleId: module.id,
  templateUrl: 'home_tab.html',
  styleUrls: ['home_tab.css']
})

export class HomeTabComponent {
  constructor(private defaultService: DefaultService) { }
  listOfPerson: Person[];
  listOfPersonFromLocal: Person[];

  getListOfPersonFromLocal(): void {
    this.defaultService.getListOfPersonFromLocal().then(listOfPerson => this.listOfPersonFromLocal = listOfPerson);
  }

  ngOnInit(): void {
    this.getListOfPerson();
  }

  getListOfPerson(): void {
    var listOfPerson: Person[] = [];
    this.defaultService.getListOfPerson().then(
      function(response) {
        for (var i = 0; i < response.message.length; i++) {
          var person = new Person(response.message[i]._id, response.message[i].firstName, response.message[i].lastName, response.message[i].city, response.message[i].state,
            response.message[i].postalCode, response.message[i].addressLine1, response.message[i].addressLine2, response.message[i].donationAmount,
            response.message[i].content, response.message[i].img, response.message[i].mailId, response.message[i].phone,
            response.message[i].representativeId, response.message[i].likesCount, response.message[i].shareCount, response.message[i].dob);
          listOfPerson.push(person);
        }
        return listOfPerson;
      }
    ).then(listOfPerson => this.listOfPerson = listOfPerson);
  }
}
