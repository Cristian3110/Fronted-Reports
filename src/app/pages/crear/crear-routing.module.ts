import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPage } from './crear.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPage
  },
  {
    path: 'servicios',
    loadChildren: () => import('../servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPageRoutingModule {}
