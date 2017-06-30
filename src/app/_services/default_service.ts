
import { Injectable } from '@angular/core';
import { Person } from '../_model/person';
import { PersonAsList } from '../_model/person_mock'

@Injectable()
export class DefaultService {

  getInneedAsList(): Promise<Person[]> {
    return Promise.resolve(PersonAsList);
  }

  getPerson(id: string): Promise<Person> {
    return this.getInneedAsList().then(persons => persons.find(person => person.getId() === id));
  }
}


// getInneedAsList(): Promise<any> {
//   return this.http.post("/abc", "formTypeRequestData")
//          .toPromise()
//          .then()
//          .catch();
//   //return Promise.resolve(PersonAsList);
// }
