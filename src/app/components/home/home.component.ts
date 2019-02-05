import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/providers/user.service';

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

  ngSubmit(){
    this.userService.login(this.user).subscribe(
      user => this.user = user
    );
  }

}
