import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/util/constants';
import { Company } from 'src/app/models/company';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/providers/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url_profile:string = Constants.DEFAULT_IMAGE_PROFILE_NAVBAR;
  company:Company;
  user:User;

  constructor( private companyService:CompanyService, private router:Router) { 
    this.company = new Company();
    this.user = new User();
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
    if(this.user.pathPhoto != null){//If the user have photo, put photo
      this.url_profile = this.user.pathPhoto;
    }
    this.company = this.user.company;
  }

  toHome(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
