import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dosificacion } from '../../shared/models/dosificacion';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';

const routes: Routes = [
  {
    path: 'dosificacion',
    component: DosificacionComponent
  },
  {
    path: 'laboratorios',
    component: LaboratoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
