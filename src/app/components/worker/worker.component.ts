import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Constants } from 'src/app/util/constants';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  
  user:User;
  orders:Array<Order>;

  events: any[];
  
  constructor() {
    this.user = new User();
  }
  
  
  ngOnInit() {

    this.events = [
      {
          "title": "All Day Event",
          "start": "2019-02-01"
      },
      {
          "title": "Long Event",
          "start": "2019-02-07",
          "end": "2019-02-10"
      },
      {
          "title": "Repeating Event",
          "start": "2019-02-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2019-02-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2019-02-11",
          "end": "2019-02-13"
      }
  ];
  }

}
