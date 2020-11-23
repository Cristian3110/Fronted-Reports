import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';

import { ConsultaPageRoutingModule } from './consulta-routing.module';

import { ConsultaPage } from './consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultaPage]
})
export class ConsultaPageModule {}
