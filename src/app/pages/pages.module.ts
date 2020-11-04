import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPageModule } from './consulta/consulta.module';
import { CrearPageModule } from './crear/crear.module';
import { GestionPageModule } from './gestion/gestion.module';
import { LoginPageModule } from './login/login.module';
import { ServiciosPageModule } from './servicios/servicios.module';
import { WelcomePageModule } from './welcome/welcome.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsultaPageModule,
    CrearPageModule,
    GestionPageModule,
    LoginPageModule,
    ServiciosPageModule,
    WelcomePageModule
  ],
  exports:[
    CommonModule,
    ConsultaPageModule,
    CrearPageModule,
    GestionPageModule,
    LoginPageModule,
    ServiciosPageModule,
    WelcomePageModule
  ]
})
export class PagesModule { }
