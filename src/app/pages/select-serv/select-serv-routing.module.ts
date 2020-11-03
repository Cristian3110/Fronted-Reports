import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectServPage } from './select-serv.page';

const routes: Routes = [
  {
    path: '',
    component: SelectServPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectServPageRoutingModule {}
