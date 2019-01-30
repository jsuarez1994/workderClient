import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/providers/rol.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  rols:any;

  constructor(private rolService:RolService) { }

  ngOnInit() {

    this.getRols();

  }

  getRols(){
    this.rolService.getRols().subscribe(
      data => { this.rols = data }
    );
  }

}
