/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkerComponent } from './components/worker/worker.component';
import { ManagerComponent } from './components/manager/manager.component';
import { BossComponent } from './components/boss/boss.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/*SERVICES*/
import { CompanyService } from './providers/company.service';
import { OrderService } from './providers/order.service';
import { UserService } from './providers/user.service';
import { RolService } from './providers/rol.service';
import { SectorService } from './providers/sector.service';
import { PositionService } from './providers/position.service';

/*PRIME*/
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { EmailComponent } from './components/email/email.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerComponent,
    ManagerComponent,
    BossComponent,
    NavbarComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    InputTextModule,
    CalendarModule,
    FullCalendarModule,
    DataViewModule,
    ButtonModule,
    DialogModule,
    ChartModule,
    TableModule
  ],
  providers: [
    CompanyService,
    OrderService,
    UserService,
    RolService,
    SectorService,
    PositionService,
    {provide: APP_BASE_HREF, useValue : '' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
