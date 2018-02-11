import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

export class RequestPoints {
  x: number;
  y: number;
  r: number;
  hit: boolean;
  userId: string;

  constructor(x: number, y: number, r: number, hit: boolean, userId: string) {
    this.x = x;
    this.y = y;
    this.r
  }
}

@Injectable()
export class PointsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable <any> {
    return this.http.get('http://localhost:8080');
  }

  getUserPoints(username): Observable<any> {
   return this.http.get('http://localhost:8080/userPoint/' + username);
  }

  addPoint(point: RequestPoints): Observable<any> {
    return this.http.post('http://localhost:8080/addPoint', point);
  }

  clearPoints(username): Observable<any> {
    return this.http.get('http://localhost:8080/clearPersonPoints/' + username);
  }

}
