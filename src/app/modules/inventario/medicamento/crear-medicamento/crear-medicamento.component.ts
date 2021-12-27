import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaboratoriosService } from '../../services/laboratorios.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Laboratorios } from '../../../../shared/models/laboratorios';
import { DosificacionService } from '../../services/dosificacion.service';
import Swal from 'sweetalert2';
import { MedicamentoService } from '../../services/medicamento.service';
import { Medicamento } from 'src/app/shared/models/medicamento';
import { Dosificacion } from 'src/app/shared/models/dosificacion';


@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit {

  form: FormGroup;
  nombresLaboratorios: string[] = [];
  nombresDosificaciones: string[] = [];

  constructor(
    private fb: FormBuilder,
    private medicamentoService: MedicamentoService,
    private laboratoriosService: LaboratoriosService,
    private dosificacionService: DosificacionService,
    public dialogRef: MatDialogRef<CrearMedicamentoComponent>
  ) { 
    this.form = this.fb.group({
      codigoCompraCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      codigoBarraCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      nombreCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      laboratorioCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      precioCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      dosificacionCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
    this.getLaboratorios();
    this.getDosificaciones();
  }

  agregarMedicamento(){
    if(this.form.valid){
      let medicamento = new Medicamento();
      medicamento.codigoCompra = this.form.value['codigoCompraCtrl'];
      medicamento.codigoBarra = this.form.value['codigoBarraCtrl'];
      medicamento.nombre = this.form.value['nombreCtrl'];
      medicamento.laboratorio = this.form.value['laboratorioCtrl'];
      medicamento.cantidad = this.form.value['cantidadCtrl'];
      medicamento.precio = this.form.value['precioBarraCtrl'];
      medicamento.dosificacion = this.form.value['dosificacionCtrl'];

      medicamento = this.medicamentoService.agregarMedicamentos(medicamento);
      this.dialogRef.close(medicamento);
    }
  }

  getLaboratorios(){
 
    let laboratorios: Laboratorios[] = [];
    laboratorios = this.laboratoriosService.getLaboratorios();

    laboratorios.forEach(({nombre}) => {
        this.nombresLaboratorios.push(nombre);
    });

  }

  getDosificaciones(){

    let dosificaciones: Dosificacion[] = [];
    dosificaciones = this.dosificacionService.getDosificaciones();

    dosificaciones.forEach(({nombre}) => {
      this.nombresDosificaciones.push(nombre);
    });

  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Medicamento agregado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }


}
