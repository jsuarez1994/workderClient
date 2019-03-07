import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Constants } from 'src/app/util/constants';
import { Utilities } from 'src/app/util/utilities';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  
  //Usuario session
  user:User;
  //Lista ordenes
  orders:Order[];

  //CALENDARIO
  //Ordenes a mostrar en el calendario
  events: any[];
  //Opciones del calendario
  options:any;
  
  //TABLA


  //MODAL
  display: boolean = false;
  labelButtonModalOrder:string
  orderModal:Order;
  typeButton:string;

  constructor() {
    this.user = new User();
    this.orderModal = new Order();
    this.events = new Array();
  }
  
  
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
    
    this.events = this.mapperOrderToOC();
    this.options = this.chargeOptionsCalendar();
    this.orders = this.user.orders;
  }

  //Mapeamos las ordenes para poder mostrar en Full Calendar
  mapperOrderToOC(){
    
    let orderCalendar:any[] = new Array();
    
    //Obtenemos las ordenes de la sesion.
    let orders:Order[] = this.user.orders;
    //Recorremos el bucle y lo almacenamos en un mapa.
    for(let or of orders){
      //Agregamos un dia mas a la fecha finish para mostrar bien en el calendario.
      let dateF = Utilities.addOneDay(or.dateFinish);
      orderCalendar.push({"title":or.title, "start":or.dateInit, "end":dateF});
    }

    return orderCalendar;
    
  }
  
  //Cargamos las opciones del FullCalendar
  chargeOptionsCalendar(){
    let today = Utilities.getCurrentDate();

    let options = {
      defaultDate: today,
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      weekends: false
    }

    return options;
  }

  //Cargamos las opciones de DataView
  chargeOptionsDataView(){

  }

  //Mostramos el modal configurado
  showDialog(id:any) {

    for(let order of this.orders){
      if(order.id == id){
        this.orderModal = order;
        //Mostrara o no el boton de completada
        if(order.complete){
          this.labelButtonModalOrder = "Reabrir orden";
          this.typeButton = "ui-button-danger";
        } else{
          this.labelButtonModalOrder = "Completar orden";
          this.typeButton = "ui-button-success";
        }
      }
    }

    this.display = true;
  }

  //Cambia el estado del atributo complete de la Orden del modal
  orderChangeComplete(){
    if(this.orderModal.complete){
      //Llamamos al servicio que cambia el estado a incompleta
      alert("Cambiamos el estado a reabrir orden");
    } else {
      //Llamamos al servicio que cambia el estado a no completada
      alert("Cambiamos el estado a completar orden");
    }
  }

}
