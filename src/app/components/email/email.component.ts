import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Constants } from 'src/app/util/constants';
import { Utilities } from 'src/app/util/utilities';
import { Mail } from 'src/app/models/mail';
import { Alert } from 'src/app/util/alert';
import { RolService } from 'src/app/providers/rol.service';
import { Validation } from 'src/app/util/validation';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  //Usuario de la session
  user: User;

  //Flag Spinner
  spinnerShow: string;

  //Objeto mail
  mail: Mail;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private rolService: RolService) {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
    this.mail = new Mail();
    //Recogemos las variables de la vista
    this.route.queryParams.subscribe(params => {
      this.mail.fromEmail = params["fromEmail"];
      this.mail.toEmail = params["toEmails"];
    });
  }

  ngOnInit() {
    //Cargamos configuracion
    this.getConfig();
  }

  /**
   * Cargamos la configuracion
  */
  getConfig() {
    //Spinner
    this.spinnerShow = Utilities.stopSpinner();

  }

  /**
   * Envia email al usuario
  */
  ngSendEmailUser() {
    //Mostramos spinner
    this.spinnerShow = Utilities.showSpinner();

    if (Validation.validateEmail(this.mail)) {
      //Llamamos al servicio para enviar mail
      this.userService.sendMail(this.mail).subscribe(
        response => {

          if (null !== response) {
            console.log("******Mail Enviado******");
            let text = Constants.MSG_TEXT_SEND_MAIL_SUCCESS + this.mail.toEmail;
            Alert.msgGeneric(Constants.MSG_TITLE_SUCCESS, text, Constants.MODAL_TYPE_SUCCESS);
          } else {
            console.log("******Mail non enviado******");
            Alert.msgGeneric(Constants.MSG_TITLE_ERROR, Constants.MSG_TEXT_SEND_MAIL_ERROR, Constants.MODAL_TYPE_ERROR);
          }

          //Escondemos el spinner
          this.spinnerShow = Utilities.stopSpinner();
        }
      );
    } else {
      console.log("******Mail mal formado******");
      Alert.msgGeneric(Constants.MSG_TITLE_ERROR, Constants.MSG_TEXT_SEND_MAIL_VALIDATION_ERROR, Constants.MODAL_TYPE_ERROR);
    }
  }

  ngBackView() {
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
