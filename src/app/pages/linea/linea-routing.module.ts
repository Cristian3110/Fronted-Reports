import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineaPage } from './linea.page';

const routes: Routes = [
  {
    path: '',
    component: LineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineaPageRoutingModule {}
