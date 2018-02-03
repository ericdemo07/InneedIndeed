
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from '../_model/article';
import { PersonAsList } from '../_model/article_mock'

@Injectable()
export class DefaultService {

  constructor(private http: Http) { }

  getListOfArticle(): Promise<any> {
    return this.http.post("/fetchallarticles", "formTypeRequestData")
      .toPromise()
      .then(result => result.json())
      .catch();
  }

  getListOfDummyArticle(): Promise<Article[]> {
    return Promise.resolve(PersonAsList);
  }

  getPerson(id: string): Promise<any> {
    return this.getPersonById(id).then(result => result)
      .catch();
  }

  getPersonById(id: string): Promise<any> {
    return this.http.get("/get_by_id/" + id)
      .toPromise()
      .then(result => result.json())
      .catch();
  }

  savePersonDeatils(ob: Article): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let obAsJson = JSON.stringify(ob);

    return this.http.post("/save_by_id", ob, options)
      .toPromise()
      .then(result => result.json())
      .catch();
  }

}





//    return this.getListOfPerson().then(persons => persons.find((person: any) => person.getId() === id));
