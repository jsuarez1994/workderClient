import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/util/constants';
import { Company } from 'src/app/models/company';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/providers/company.service';
import { Router } from '@angular/router';
import { RolService } from 'src/app/providers/rol.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url_profile: string = Constants.DEFAULT_IMAGE_PROFILE_NAVBAR;
  company: Company;
  user: User;

  constructor(private companyService: CompanyService, private router: Router, private rolService: RolService) {
    this.company = new Company();
    this.user = new User();
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
    if (this.user.pathPhoto != null) {//If the user have photo, put photo
      this.url_profile = this.user.pathPhoto;
    }
    this.company = this.user.company;
  }

  /**
   * Va a la pagina de Login
  */
  toHome() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  /**
   * Va a la pagina de Inicio segun rol
  */
  toDashBoard() {
    this.rolService.getRol(this.user.rol.id).subscribe(
      respose => {
        if (respose.id === Constants.ID_ROL_ADMIN) {//HOME ADMIN
          console.log("Home Admin");
          this.router.navigate([Constants.URL_ADMIN_INDEX]);
        } else if (respose.id === Constants.ID_ROL_USER_BOSS) {//HOME BOSS
          console.log("Home Boss");
          this.router.navigate([Constants.URL_BOSS_INDEX]);
        } else if (respose.id === Constants.ID_ROL_USER_MANAGER) {//HOME MANAGER
          console.log("Home Manager");
          this.router.navigate([Constants.URL_MANAGER_INDEX]);
        } else if (respose.id === Constants.ID_ROL_USER_WORKER) {//HOME WORKER
          console.log("Home Worker");
          this.router.navigate([Constants.URL_WORKER_INDEX]);
        }
      }
    );
  }

}
