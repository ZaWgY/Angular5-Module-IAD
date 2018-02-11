import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export interface Person {
  nameous: string;
  passwordious: string;
}
@Injectable()
export class StartPageService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/person';

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  registerNewUser(person: Person): Observable<any> {
    return this.http.post('http://localhost:8080/addPerson', person, {observe: 'response'});
  }
  authUser(person: Person): Observable<any> {
    return this.http.post('http://localhost:8080/checkPassword', person, {observe: 'response'});
  }
}
