/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/*COMPONENTS*/
import { AppComponent } from './app.component';

/*SERVICES*/
import { CompanyService } from './providers/company.service';
import { OrderService } from './providers/order.service';
import { UserService } from './providers/user.service';
import { RolService } from './providers/rol.service';
import { SectorService } from './providers/sector.service';
import { PositionService } from './providers/position.service';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CompanyService,
    OrderService,
    UserService,
    RolService,
    SectorService,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
