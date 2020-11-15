import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaPageRoutingModule } from './linea-routing.module';

import { LineaPage } from './linea.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LineaPage]
})
export class LineaPageModule {}
