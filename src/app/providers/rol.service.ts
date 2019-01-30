import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  url:string;
  headers:HttpHeaders;

  constructor(private _http:HttpClient) {
    this.url = Constants.LOCAL_API;
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }


  /*-----------METHODS-----------*/
  getRols(){
    return this._http.get(this.url + "rols");
  }
}
