
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Person } from '../_model/person';
import { PersonAsList } from '../_model/person_mock'

@Injectable()
export class DefaultService {
    getInneedAsList(): Promise<Person[]> {
      return Promise.resolve(PersonAsList);

    }
}
