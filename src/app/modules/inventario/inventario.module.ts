import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearDosificacionComponent } from './components/dosificacion/crear-dosificacion/crear-dosificacion.component';
import { EditarDosificacionComponent } from './components/dosificacion/editar-dosificacion/editar-dosificacion.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { CrearLaboratoriosComponent } from './laboratorios/crear-laboratorios/crear-laboratorios.component';
import { EditarLaboratoriosComponent } from './laboratorios/editar-laboratorios/editar-laboratorios.component';


@NgModule({
  declarations: [
    DosificacionComponent,
    CrearDosificacionComponent,
    EditarDosificacionComponent,
    LaboratoriosComponent,
    CrearLaboratoriosComponent,
    EditarLaboratoriosComponent,
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
