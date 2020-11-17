import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlidesComponent } from './slides/slides.component';
import { FormlineComponent } from './formline/formline.component';
import { ForminterComponent } from './forminter/forminter.component';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SlidesComponent,
    FormlineComponent,
    ForminterComponent,
    HeaderPrincipalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    SlidesComponent,
    FormlineComponent,
    ForminterComponent,
    HeaderPrincipalComponent,
    
  ]
})
export class ComponentsModule { }
