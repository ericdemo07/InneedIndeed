
import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getListOfPerson(): Promise<any> {
    return this.http.post("/getall", "formTypeRequestData")
      .toPromise()
      .then(result => result.json())
      .catch();
  }





  matchUser(ob: User): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post("/login_signup",ob,options)
      .toPromise()
      .then(result => result.json())
      .catch();
  }

  savePersonDeatils(ob: User): Promise<any> {
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
