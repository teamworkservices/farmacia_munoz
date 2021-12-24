import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaboratoriosService } from '../../services/laboratorios.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Laboratorios } from '../../../../shared/models/laboratorios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-laboratorios',
  templateUrl: './crear-laboratorios.component.html',
  styleUrls: ['./crear-laboratorios.component.css']
})
export class CrearLaboratoriosComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private laboratoriosService: LaboratoriosService,
    public dialogRef: MatDialogRef<CrearLaboratoriosComponent>
  ) { 
    this.form = this.fb.group({
      codigoCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      nombreCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {}

  agregarLaboratorios(){
    if(this.form.valid){
      let laboratorios = new Laboratorios();
      laboratorios.codigo = this.form.value['codigoCtrl'];
      laboratorios.nombre = this.form.value['nombreCtrl'];

      laboratorios = this.laboratoriosService.agregarLaboratorios(laboratorios);
      this.dialogRef.close(laboratorios);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Laboratorio agregado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
