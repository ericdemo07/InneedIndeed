
import { Injectable } from '@angular/core';
import { Person } from '../_model/person';
import { PersonAsList } from '../_model/person_mock'
import { Headers, RequestOptions, Http, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DefaultService {

  constructor(private http: Http) { }

  getInneedAsList(): Promise<any> {
    console.log("I am in service");
    return this.http.post("/abc", "formTypeRequestData")
      .toPromise()
      .then(result => {var a = result.text();console.log(a)})
      .catch();
  }
  getInneedAsList1(): Promise<Person[]> {
    return Promise.resolve(PersonAsList);
  }
  getPerson(id: string): Promise<Person> {
    return this.getInneedAsList().then(persons => persons.find((person: any) => person.getId() === id));
  }
}


// getInneedAsList(): Promise<any> {
//   return this.http.post("/abc", "formTypeRequestData")
//          .toPromise()
//          .then()
//          .catch();
//   //return Promise.resolve(PersonAsList);
// }
