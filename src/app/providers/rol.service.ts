import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  headers:HttpHeaders;
  url:string;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  /*-----------METHODS-----------*/

  getRols():Observable<Rol>{
    this.url = Constants.URL_API + Constants.GET_ALL_ROLS;
    return this._http.get<Rol>(this.url);
  }

  getRol(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ROL + Constants.SPLIT_URL;
    return this._http.get(this.url+id);
  }

  delete(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ROL + Constants.SPLIT_URL;
    return this._http.delete(this.url + id)
  }

  saveOrUpdate(rol:Rol):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ROL;
    return this._http.post(this.url, rol, {headers:this.headers});
  }
}
