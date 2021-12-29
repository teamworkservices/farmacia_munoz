import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Dosificacion } from '../../models/dosificacion';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DosificacionService } from '../../../modules/inventario/services/dosificacion.service';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-buscador-dosificacion',
  templateUrl: './buscador-dosificacion.component.html',
  styleUrls: ['./buscador-dosificacion.component.css']
})
export class BuscadorDosificacionComponent implements OnInit {

  listadoDosificacionesEncontrados: Dosificacion[];
  dosificacionForm: FormGroup;
  @Input() placeholderTitulo: string;
  @Output() dosificacionSeleccionado;

  constructor(private fb: FormBuilder, public dosificacionService: DosificacionService) { 
    this.listadoDosificacionesEncontrados = [];
    this.dosificacionSeleccionado = new EventEmitter<Dosificacion>();
    this.placeholderTitulo = '';

    this.dosificacionForm = this.fb.group({
      dosificacionCtrl:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  getDosificaciones(event:Event){
    const searchParam = (event.target as HTMLInputElement).value;
    this.listadoDosificacionesEncontrados = this.dosificacionService.getDosificacionesFilter(searchParam);
  }

  setDosificacionSeleccionado(dosificacion: Dosificacion){
    this.dosificacionSeleccionado.emit(dosificacion)
    this.dosificacionForm.controls['dosificacionCtrl'].setValue(dosificacion.codigo + ' - ' + dosificacion.nombre);
  }
}

