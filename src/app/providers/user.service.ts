import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Constants } from '../util/constants';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers:HttpHeaders;
  url:string;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }


  /*-----------METHODS-----------*/
  login(user:User):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_USER + Constants.SPLIT_URL + Constants.USER_LOGIN;
    return this._http.post(this.url, user, {headers:this.headers});
  }

  saveOrUpdate(user:User):Observable<User>{
    this.url = Constants.URL_API + Constants.GET_USER;
    return this._http.post<User>(this.url, user, {headers:this.headers});
  }

  delete(id:number):Observable<User>{
    this.url = Constants.URL_API + Constants.GET_USER + Constants.SPLIT_URL;
    return this._http.delete<User>(this.url + id)
  }

  getUsers():Observable<User>{
    this.url = Constants.URL_API + Constants.GET_ALL_USERS;
    return this._http.get<User>(this.url);
  }

  getUser(id:number):Observable<User>{
    this.url = Constants.URL_API + Constants.GET_USER + Constants.SPLIT_URL;
    return this._http.get<User>(this.url + id);
  }

  getUsersByCompany(idCompany:number):Observable<User>{
    this.url = Constants.URL_API + Constants.GET_ALL_USERS + Constants.SPLIT_URL + Constants.GET_COMPANY + Constants.SPLIT_URL;
    return this._http.get<User>(this.url + idCompany);
  }

  getUserByOrder(order:Order):Observable<User>{
    this.url = Constants.URL_API + Constants.GET_USER + Constants.SPLIT_URL + Constants.GET_ORDER;
    return this._http.post<User>(this.url + order, {headers:this.headers});
  }
}
