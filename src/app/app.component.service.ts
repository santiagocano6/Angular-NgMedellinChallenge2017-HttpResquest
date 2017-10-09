import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ComponentService {
  private localUrl = `https://api.icndb.com/jokes/random`;

  constructor(private http: Http) { }

  getJoke(): Observable<string> {
    return this.http
      .get(this.localUrl)
      .map((response: Response) => response.json().value.joke)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<string> {
    const mensaje = `Local service error: ${error.json().error || error.json().Message || 'Server error'}`;
    return Observable.create((observer: any) => {
      observer.error(mensaje);
      observer.complete();
    });
  }
}
