import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dosificacion } from '../../shared/models/dosificacion';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';

const routes: Routes = [
  {
    path: 'dosificacion',
    component: DosificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
