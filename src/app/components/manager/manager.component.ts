import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/providers/company.service';
import { Constants } from 'src/app/util/constants';
import { Company } from 'src/app/models/company';
import { UserService } from 'src/app/providers/user.service';
import { OrderService } from 'src/app/providers/order.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  //Usuario de la session
  user:User;

  //Lista de usuarios de la empresa
  listUser:any;

  //Lista de ordenes incompletas
  listOrdersIncomplete:Array<Order>;

  //Header columna
  columns:Array<String>;

  //Opciones de la lista de usuarios
  options:any;

  constructor(  private orderService:OrderService,
                private userService:UserService) {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
  }

  ngOnInit() {
    //Cargamos una lista de usuarios de la empresa
    this.getListUsers();
    //Cargamos las ordenes incompletas
    this.getOrdersIncomplete();
  }

  /**
   * Obtiene los usuarios de una empresa
   */
  getListUsers(){
    this.userService.getUsersByCompany(this.user.company.id).subscribe(
      response => {
        this.listUser = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  /**
   * Obtiene las ordenes incompletas de una empresa
   */
  getOrdersIncomplete(){
    this.orderService.getOrdersIncompleteByCompany(this.user.company).subscribe(
      response => {
        let orders = response;
        for(let order of orders){
          let user:User = this.getUserByOrder(order);
          order.user = user;
          this.listOrdersIncomplete.push(order);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  /**
   * Obtiene el usuario de una orden
   */
  getUserByOrder(order:Order){
    let user:User;
    this.userService.getUserByOrder(order).subscribe(
      response => {
        user = response
      },
      error => {
        console.log(<any>error);
      }
    )
    return user;
  }

}
