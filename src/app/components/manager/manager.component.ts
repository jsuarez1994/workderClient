import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Constants } from 'src/app/util/constants';
import { UserService } from 'src/app/providers/user.service';
import { OrderService } from 'src/app/providers/order.service';
import { Order } from 'src/app/models/order';
import { Alert } from '../../util/alert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  //Usuario de la session
  user: User;

  //Lista de usuarios de la empresa
  listUsersActive: any;

  //Header columna
  columns: Array<String>;

  //Opciones de la lista de usuarios
  options: any;

  //Iconos de talba
  delete: string;
  edit: string;
  send: string;

  constructor(private orderService: OrderService,
    private userService: UserService) {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
  }

  ngOnInit() {
    //Cargamos una lista de usuarios de la empresa
    this.getListUsersActive();
    //Cargamos configuracion
    this.getConfig();
  }

  /**
   * Obtiene los usuarios de una empresa
   */
  getListUsersActive() {
    this.userService.getUsersActiveByCompany(this.user.company.id).subscribe(
      response => {
        this.listUsersActive = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  /**
   * Cargamos configuracion de la vista
  */
  getConfig() {
    this.edit = Constants.IMAGE_EDIT;
    this.delete = Constants.IMAGE_DELETE;
    this.send = Constants.IMAGE_SEND;
  }

  /**
   * Muestra modal para dar de baja a un usuario
   * @param   user
  */
  showModalDownUser(user: User) {
    //Modal de confirmacion de dar Baja Usuario
    Swal.fire({
      title: Constants.TITLE_MODAL_DOWN_USER,
      text: Constants.TEXT_MODAL_DOWN_USER + user.name + " " + user.surname,
      type: Constants.MODAL_TYPE_INFO,
      showCancelButton: true,
      confirmButtonColor: Constants.COLOR_RED_BUTTON,
      confirmButtonText: Constants.TEXT_CONFIRM_BUTTON,
      cancelButtonColor: Constants.COLOR_GREEN_BUTTON,
      cancelButtonText: Constants.MODAL_BUTTON_CANCEL,
    }).then((result) => {
      //Si clicamos en "Dar de baja"
      if (result.value) {
        //Cambiamos la propiedad a false
        user.activated = false;
        this.ngDownUser(user);
      }
    })
  }

  /**
   * Da de baja al usuario mostrado
   * @param   user
  */
  ngDownUser(user: User) {
    //Servicio para que actualice al usuario
    this.userService.saveOrUpdate(user).subscribe(
      user => {
        console.log("Usuario Actualizado");
        //Cargamos una lista de usuarios de la empresa
        this.getListUsersActive();
        let text = user.name + " " + user.surname + " " + Constants.MSG_TEXT_DOWN_USER_SUCCESS;
        Alert.msgGeneric(Constants.MSG_TITLE_SUCCESS, text, Constants.MODAL_TYPE_SUCCESS);
      }
    );
  }


  /**
   * Muestra modal para actualizar datos de un usuario
   * @param   user
  */
  showModalUpdateUser(user: User) {

  }

  /**
   * Da de baja al usuario mostrado
   * @param   user
  */
  ngUpdateUser(user: User) {


    //Cargamos una lista de usuarios de la empresa
    this.getListUsersActive();
  }

  /**
   * Muestra el modal para enviar email al usuario
   * @param   user
  */
  showModalSendEmailUser(user: User) {

  }

  /**
   * Envia email al usuario
   * @param   user
  */
  ngSendEmailUser(user: User) {

  }

}
