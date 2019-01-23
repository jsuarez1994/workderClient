import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class UserServiceService{

  //Local
  local:string = "localhost:8080/workder_api";

  url:string = this.local;

  constructor() { }
  
  

}
