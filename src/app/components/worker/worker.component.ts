import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Constants } from 'src/app/util/constants';
import { Alert } from 'src/app/util/alert';
import { Utilities } from 'src/app/util/utilities';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/providers/order.service';

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
  eventsModal:any[];
  optionsModal:any;

  //GRAPHIC
  data:any;

  constructor(private orderService:OrderService ) {
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
    this.orderModal = new Order();
    this.events = new Array();
    this.eventsModal = new Array();
  }
  
  
  ngOnInit() {
    
    this.options = this.chargeOptionsCalendar();
    this.optionsModal = this.chargeOptionsModalCalendar();
    this.orders = this.user.orders;
    this.events = this.mapperOrderToOC(this.user.orders);
    this.chargeDataGraphic();

  }

  //Mapeamos las ordenes para poder mostrar en Full Calendar
  mapperOrderToOC(listOrder:any){
    
    let orderCalendar:any[] = new Array();
    
    //Obtenemos las ordenes de la sesion.
    let orders:Order[] = listOrder;
    //Recorremos el bucle y lo almacenamos en un mapa.
    for(let or of orders){
      orderCalendar.push(this.mapperOrder(or));
    }
    
    return orderCalendar;
    
  }

  //Mapeamos una orden para devolverla
  mapperOrder(or:Order){
    //Agregamos un dia mas a la fecha finish para mostrar bien en el calendario.
    let dateF = Utilities.addOneDay(or.dateFinish);
    return {"title":or.title, "start":or.dateInit, "end":dateF};
  }

  //Metodo que carga los datos de las ordenes relacionadas con el usuario
  //para realizar la grafica
  chargeDataGraphic(){
    let contOC:number = 0;
    let contOI:number = 0;

    let orders:Order[] = this.orders;

    for(let order of orders){
      if(order.complete){
        contOC++;
      }else{
        contOI++;
      }
    }

    //Cargamos la grafica
    this.data = {
      labels: [Constants.ORDERS_COMPLETE_STRING,Constants.ORDERS_INCOMPLETE_STRING],
      datasets: [
          {
              data: [contOC, contOI],
              backgroundColor: [
                  "#007E24",
                  "#CA002B",
              ],
              hoverBackgroundColor: [
                  "#00320E",
                  "#32000B"
              ]
          }]    
      };

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

  //Cargamos las opciones del FullCalendar del modal
  chargeOptionsModalCalendar(){
    let today = Utilities.getCurrentDate();

    let options = {
      defaultDate: today,
      header: {
          left: 'none',
          center: 'title',
          right: 'none'
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
          this.typeButton = "ui-button-danger ui-button-rounded p-1";
        } else{
          this.labelButtonModalOrder = "Completar orden";
          this.typeButton = "ui-button-success ui-button-rounded p-1";
        }

      }
    }
    //Agregamos el evento de la orden del modal
    let orderCalendar:any[] = new Array();
    orderCalendar.push(this.mapperOrder(this.orderModal));
    this.eventsModal = orderCalendar;

    //Mostramos modal
    this.display = true;
  }

  //Cambia el estado del atributo complete de la Orden del modal
  orderChangeComplete(){
    if(this.orderModal.complete){
      //Llamamos al servicio que cambia el estado a incompleta
      this.orderModal.complete = false;
    } else {
      //Llamamos al servicio que cambia el estado a completada
      this.orderModal.complete = true;
    }
    
    this.orderService.saveOrUpdate(this.orderModal).subscribe(
      response => {
        //Obtenemos las ordenes del usuario
        this.getOrdersByUser(this.user);
        //Mostramos mensaje alerta Success
        Alert.msgPropertyCompleteChange(this.orderModal.title);
        //Cargamos la grafica
        this.chargeDataGraphic();
      },
      error => {
        console.log(<any>error);
        Alert.msgPropertyErrorChange(this.orderModal.title);
      }
    );

    //Escondemos Modal
    this.display = false;
  }

  //Obtenemos las ordenes de un usuario
  getOrdersByUser(user:User):any{
    this.orderService.getOrdersByUser(user).subscribe(
      orders => {
        this.orders = orders;
      }
    );
  }

}
