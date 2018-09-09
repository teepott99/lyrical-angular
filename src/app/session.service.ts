import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators/';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  mainURL:string = "http://localhost:3000";

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`/signup`, user).pipe(map(res => res.json()), catchError(this.handleError));
  }

  login(user) {
    return this.http.post(`/login`, user).pipe(map(res => res.json()), catchError(this.handleError));
  }

  logout() {
    return this.http.post(`/logout`, {}).pipe(map(res => res.json()), catchError(this.handleError));
  }

  isLoggedIn() {
    return this.http.get(`/loggedin`).pipe(map(res => res.json()), catchError(this.handleError));
  }

  getPrivateData() {
    return this.http.get(`/private`).pipe(map(res => res.json()), catchError(this.handleError));
  }
}