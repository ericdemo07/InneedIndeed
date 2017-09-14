
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

  getPerson(id: string): Promise<any> {
    return this.getPersonById(id).then(result => result)
    .catch();
  }

  getPersonById(id: string): Promise<any> {
    return this.http.get("/get_by_id/"+id)
      .toPromise()
      .then(result => result.json())
      .catch();
  }

  savePersonDeatils(ob: Person): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let obAsJson = JSON.stringify(ob);

    return this.http.post("/save_by_id",ob,options)
      .toPromise()
      .then(result => result.json())
      .catch();
  }

}





//    return this.getListOfPerson().then(persons => persons.find((person: any) => person.getId() === id));
