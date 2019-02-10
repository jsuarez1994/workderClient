import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  headers:HttpHeaders;
  url:string;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  /*-----------METHODS-----------*/

  getPositions():Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_POSITIONS;
    return this._http.get(this.url);
  }

  getPosition(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_POSITION + Constants.SPLIT_URL;
    return this._http.get(this.url+id);
  }

  delete(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_POSITION + Constants.SPLIT_URL;
    return this._http.delete(this.url + id)
  }

  saveOrUpdate(position:Position):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_POSITION;
    return this._http.post(this.url, position, {headers:this.headers});
  }
}
