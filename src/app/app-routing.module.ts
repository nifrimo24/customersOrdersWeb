import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulosRoutingModule } from './modulos/modulos.routing';

const routes: Routes = [
  {path:'**',redirectTo:'/orders'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ModulosRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
