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
  //Ordenes a mostrar en el calendario
  orders: any[];
  //Opciones del calendario
  options:any;
  
  constructor() {
    this.user = new User();
    this.orders = new Array();
  }
  
  
  ngOnInit() {
    this.orders = this.mapperOrderToOC();
    this.options = this.chargeOptions();
  }

  //Mapeamos las ordenes para poder mostrar en Full Calendar
  mapperOrderToOC(){
    
    let orderCalendar:any[] = new Array();
    
    //Obtenemos las ordenes de la sesion.
    this.user = JSON.parse(sessionStorage.getItem(Constants.USER_SESSION));
    let orders:Order[] = this.user.orders;
    //Recorremos el bucle y lo almacenamos en un mapa.
    for(let or of orders){
      orderCalendar.push({"title":or.title, "start":or.dateInit, "end":or.dateFinish});
    }

    return orderCalendar;
    
  }
  
  //Cargamos las opciones del FullCalendar
  chargeOptions(){
    let today = Utilities.getCurrentDate();

    let options = {
      defaultDate: today,
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      dateClick: (e) =>  {
          console.log(e);
          alert("Prueba");
      }
    }

    return options;
  }

}
