
import { Injectable } from '@angular/core';
//import { Headers, RequestOptions, Http, Response  } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
import { Inneed } from './inneedmodel';
import { InneedAsList } from './mockinneeduser'

@Injectable()
export class InneedCommonService {
    getInneedAsList(): Promise<Inneed[]> {
      return Promise.resolve(InneedAsList);

    }
}
