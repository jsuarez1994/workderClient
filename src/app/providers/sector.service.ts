import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../util/constants';
import { Sector } from '../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  headers:HttpHeaders;
  url:string;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  /*-----------METHODS-----------*/

  getSectors():Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_SECTORS;
    return this._http.get(this.url);
  }

  getSector(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_SECTOR + Constants.SPLIT_URL;
    return this._http.get(this.url+id);
  }

  delete(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_SECTOR + Constants.SPLIT_URL;
    return this._http.delete(this.url + id)
  }

  saveOrUpdate(sector:Sector):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_SECTOR;
    return this._http.post(this.url, sector, {headers:this.headers});
  }
}
