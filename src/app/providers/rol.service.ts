import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  headers:HttpHeaders;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  /*-----------METHODS-----------*/
  getRols():Observable<any>{
    return this._http.get<any>(Constants.LOCAL_API + Constants.GET_ALL_ROLS);
  }
}
