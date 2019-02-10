import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../util/constants';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  headers:HttpHeaders;
  url:string;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  /*-----------METHODS-----------*/

  getCompanys():Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_COMPANYS;
    return this._http.get(this.url);
  }

  getCompany(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_COMPANY + Constants.SPLIT_URL;
    return this._http.get(this.url+id);
  }

  delete(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_COMPANY + Constants.SPLIT_URL;
    return this._http.delete(this.url + id)
  }

  saveOrUpdate(company:Company):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_COMPANY;
    return this._http.post(this.url, Company, {headers:this.headers});
  }
}
