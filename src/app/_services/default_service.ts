
import { Injectable } from '@angular/core';
import { Person } from '../_model/person';
import { PersonAsList } from '../_model/person_mock'
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DefaultService {

  constructor(private http: Http) { }

  getListOfPerson(): Promise<any> {
    return this.http.post("/getall", "formTypeRequestData")
      .toPromise()
      .then(result => result.json())
      .catch();
  }

  getListOfPersonFromLocal(): Promise<Person[]> {
    return Promise.resolve(PersonAsList);
  }

  getPerson(id: string): Promise<Person> {
    return this.getListOfPerson().then(
      function(response) {
        var a: Person;
        console.log(response);
        return a;
      });
  }

  getPersonById(id: string): Promise<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('appid', "blank");
    return this.http.get("/get_by_id/11",{ search: params })
      .toPromise()
      .then(result => {console.log(result.json())})
      .catch();
  }

}





//    return this.getListOfPerson().then(persons => persons.find((person: any) => person.getId() === id));
