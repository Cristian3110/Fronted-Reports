import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPageModule } from './consulta/consulta.module';
import { GestionPageModule } from './gestion/gestion.module';
import { LoginPageModule } from './login/login.module';
import { ServiciosPageModule } from './servicios/servicios.module';
import { WelcomePageModule } from './welcome/welcome.module';
import { LineaPageModule } from './linea/linea.module';
import { InternetPageModule } from './internet/internet.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsultaPageModule,
    GestionPageModule,
    LoginPageModule,
    ServiciosPageModule,
    WelcomePageModule,
    LineaPageModule,
    InternetPageModule
  ],
  exports:[
    CommonModule,
    ConsultaPageModule,
    GestionPageModule,
    LoginPageModule,
    ServiciosPageModule,
    WelcomePageModule,
    LineaPageModule,
    InternetPageModule
  ]
})
export class PagesModule { }
