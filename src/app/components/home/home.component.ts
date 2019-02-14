import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/providers/user.service';
import {InputTextModule} from 'primeng/inputtext';
import { Alert } from '../../util/alert';
import { Constants } from 'src/app/util/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User =  new User();
  alertEmail:string;
  alertPassword:string;

  constructor( private userService:UserService, private router:Router ) { 
  }

  ngOnInit() {}

  ngLogin(){

    if(     (this.user.email == null || this.user.email == undefined) 
        ||  (this.user.password == null || this.user.password == undefined)){

      Alert.msgErrorLogin();

    } else {

      this.userService.login(this.user).subscribe(
        user => {
          if(user != null){
            this.user = user;
            console.log(this.user);
            let userJson:string = JSON.stringify(this.user);
            sessionStorage.setItem("user", userJson);
            Alert.msgSuccessLogin();

            if(this.user.rol.id == Constants.ID_ROL_USER_BOSS){
              //this.router.navigate(['/'])
            } else if (this.user.rol.id == Constants.ID_ROL_USER_WORKER) {
              //this.router.navigate(['/'])
            }
          } else {
            Alert.msgErrorLogin()
          }
        }
      );
    }
    
  }

  ngClear(){
    this.user.email = Constants.STRING_EMPTY;
    this.user.password = Constants.STRING_EMPTY;
  }

  validEmail(){
    if(!Constants.EXP_EMAIL.test(this.user.email)){
      this.alertEmail = Constants.ALERT_EMAIL;
    } else {
      this.alertEmail = Constants.STRING_EMPTY;
    }
  }

  validPassword(){
    if(!Constants.EXP_PASSWORD.test(this.user.password)){
      this.alertPassword = Constants.ALERT_PASSWORD;
    } else {
      this.alertPassword = Constants.STRING_EMPTY;
    }
  }

}
