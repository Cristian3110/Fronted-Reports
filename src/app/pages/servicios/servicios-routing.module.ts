import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
  },
    {
    path: 'linea',
    loadChildren: () => import('../linea/linea.module').then( m => m.LineaPageModule)
  },
  {
    path: 'internet',
    loadChildren: () => import('../internet/internet.module').then( m => m.InternetPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPageRoutingModule {}
