import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent}from './screens/principal/principal.component'


const routes: Routes = [
  {path: '', redirectTo:'Inicio',pathMatch:'full'},
  {path: 'Inicio', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
