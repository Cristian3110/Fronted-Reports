import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlidesComponent } from './slides/slides.component';
import { FormlineComponent } from './formline/formline.component';
import { ForminterComponent } from './forminter/forminter.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SlidesComponent,
    FormlineComponent,
    ForminterComponent
    ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    SlidesComponent,
    FormlineComponent,
    ForminterComponent
  ]
})
export class ComponentsModule { }
