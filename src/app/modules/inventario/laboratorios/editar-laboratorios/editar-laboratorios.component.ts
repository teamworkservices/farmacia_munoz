import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LaboratoriosService } from '../../services/laboratorios.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Laboratorios } from '../../../../shared/models/laboratorios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-laboratorios',
  templateUrl: './editar-laboratorios.component.html',
  styleUrls: ['./editar-laboratorios.component.css']
})
export class EditarLaboratoriosComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private laboratoriosService: LaboratoriosService,
    public dialogRef: MatDialogRef<EditarLaboratoriosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Laboratorios) {
    
  this.form = this.fb.group({
    codigoCtrl: [data.codigo, [Validators.required, Validators.maxLength(3)]],
    nombreCtrl: [data.nombre, [Validators.required, Validators.maxLength(20)]],
  })

  }

  ngOnInit(): void {}

  editarLaboratorios(){
    if(this.form.valid){
      let laboratorios = new Laboratorios();
      laboratorios.id = this.data.id;
      laboratorios.codigo = this.form.value['codigoCtrl'];
      laboratorios.nombre = this.form.value['nombreCtrl'];

      Object.assign(laboratorios, this.laboratoriosService.editarLaboratorios(laboratorios));
      this.dialogRef.close(laboratorios);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Laboratorio actualizado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
