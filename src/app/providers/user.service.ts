import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Constants } from '../util/constants';


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
    this.url = Constants.LOCAL_API + Constants.GET_USER + Constants.USER_LOGIN;
    return this._http.post(this.url, user, {headers:this.headers});
  }
}
