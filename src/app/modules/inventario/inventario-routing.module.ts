import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dosificacion } from '../../shared/models/dosificacion';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';

const routes: Routes = [
  {
    path: 'dosificacion',
    component: DosificacionComponent
  },
  {
    path: 'laboratorios',
    component: LaboratoriosComponent
  },
  {
    path: 'medicamento',
    component: MedicamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
