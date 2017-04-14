
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BiToolCommonService {
    constructor(private http: Http) { }

    create(requestData: FormData): Observable<any> {
        let headers = new Headers({ 'Access-Control-Allow-Headers': 'Authorization' });
        let options = new RequestOptions({ headers: headers });
        var formTypeRequestData: any = requestData; //this line is just to remove compile time error although not required
        return this.http.post("generateyaml", formTypeRequestData,options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        console.log(body);
        return body || {};
    }
    private handleError(error: Response | any) {
        console.log(error);
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
