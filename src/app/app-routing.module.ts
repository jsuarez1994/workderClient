import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BossComponent } from './components/boss/boss.component';
import { ManagerComponent } from './components/manager/manager.component';
import { WorkerComponent } from './components/worker/worker.component';
import { Constants } from './util/constants';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: Constants.URL_BOSS_INDEX, component: BossComponent},
  {path: Constants.URL_MANAGER_INDEX, component: ManagerComponent},
  {path: Constants.URL_WORKER_INDEX, component: WorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
