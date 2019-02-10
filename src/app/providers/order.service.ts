import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../util/constants';
import { Order } from '../models/order';
import { User } from '../models/user';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  headers:HttpHeaders;
  url:string;

  constructor(private _http:HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  /*-----------METHODS-----------*/

  getOrders():Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_ORDERS;
    return this._http.get(this.url);
  }

  getOrder(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ORDER + Constants.SPLIT_URL;
    return this._http.get(this.url + id);
  }

  delete(id:number):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ORDER + Constants.SPLIT_URL;
    return this._http.delete(this.url + id)
  }

  saveOrUpdate(order:Order):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ORDER;
    return this._http.post(this.url, order, {headers:this.headers});
  }

  getOrdersCompleteByUser(user:User):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_ORDERS + Constants.SPLIT_URL + Constants.ORDERS_COMPLETE;
    return this._http.post(this.url, user, {headers:this.headers});
  }

  getOrdersIncompleteByUser(user:User):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_ORDERS + Constants.SPLIT_URL + Constants.ORDERS_INCOMPLETE;
    return this._http.post(this.url, user, {headers:this.headers});
  }

  getOrdersCompleteByCompany(company:Company):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_ORDERS + Constants.SPLIT_URL + Constants.ORDERS_COMPANY_COMPLETE;
    return this._http.post(this.url, company, {headers:this.headers});
  }

  getOrdersIncompleteByCompany(company:Company):Observable<any>{
    this.url = Constants.URL_API + Constants.GET_ALL_ORDERS + Constants.SPLIT_URL + Constants.ORDERS_COMPANY_INCOMPLETE;
    return this._http.post(this.url, company, {headers:this.headers});
  }
}
