import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectServPageRoutingModule } from './select-serv-routing.module';

import { SelectServPage } from './select-serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectServPageRoutingModule
  ],
  declarations: [SelectServPage]
})
export class SelectServPageModule {}
