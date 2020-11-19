import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { InternetPageRoutingModule } from './internet-routing.module';

import { InternetPage } from './internet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InternetPage]
})
export class InternetPageModule {}
