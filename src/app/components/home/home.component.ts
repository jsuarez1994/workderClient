import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/providers/user.service';
import {InputTextModule} from 'primeng/inputtext';
import { Alert } from '../../util/alert';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;

  constructor( private userService:UserService ) { 
    this.user =  new User();
  }

  ngOnInit() {}

  ngLogin(){

    if(     (this.user.email == null || this.user.email == undefined || this.user.email == Constants.STRING_EMPTY) 
        ||  (this.user.password == null || this.user.password == undefined || this.user.password == Constants.STRING_EMPTY)){

      Alert.msgErrorLogin(Constants.MSG_ERROR_TITLE_LOGIN, Constants.MSG_ERROR_DESCRIPTION_LOGIN);

    } else {

      this.userService.login(this.user).subscribe(
        user => this.user = user
      );

      if(this.user != null){
        Alert.msgSuccessLogin(Constants.MSG_SUCCESS_TITLE_LOGIN);
      }
    }
    
  }

}
