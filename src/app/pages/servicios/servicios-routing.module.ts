import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
  },
  {
    path: 'crear',
    loadChildren: () => import('../crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('../consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPageRoutingModule {}