import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaboratoriosService } from '../../services/laboratorios.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Laboratorios } from '../../../../shared/models/laboratorios';
import { DosificacionService } from '../../services/dosificacion.service';
import Swal from 'sweetalert2';
import { MedicamentoService } from '../../services/medicamento.service';
import { Medicamento } from 'src/app/shared/models/medicamento';
import { Dosificacion } from 'src/app/shared/models/dosificacion';


@Component({
  selector: 'app-editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styleUrls: ['./editar-medicamento.component.css']
})
export class EditarMedicamentoComponent implements OnInit {

  form: FormGroup;
  nombresLaboratorios: string[] = [];
  nombresDosificaciones: string[] = [];

  constructor(
    private fb: FormBuilder,
    private medicamentoService: MedicamentoService,
    private laboratoriosService: LaboratoriosService,
    private dosificacionService: DosificacionService,
    public dialogRef: MatDialogRef<EditarMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Medicamento
    ) { 
    this.form = this.fb.group({
      codigoCompraCtrl: [data.codigoCompra, [Validators.required, Validators.maxLength(3)]],
      codigoBarraCtrl: [data.codigoBarra, [Validators.required, Validators.maxLength(3)]],
      nombreCtrl: [data.nombre, [Validators.required, Validators.maxLength(20)]],
      laboratorioCtrl: [data.laboratorio, [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl: [data.cantidad, [Validators.required, Validators.maxLength(20)]],
      precioCtrl: [data.precio, [Validators.required, Validators.maxLength(20)]],
      dosificacionCtrl: [data.dosificacion, [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
    this.getLaboratorios();
    this.getDosificaciones();
  }

  editarMedicamento(){
    if(this.form.valid){
      let medicamento = new Medicamento();
      medicamento.id = this.data.id;
      medicamento.codigoCompra = this.form.value['codigoCompraCtrl'];
      medicamento.codigoBarra = this.form.value['codigoBarraCtrl'];
      medicamento.nombre = this.form.value['nombreCtrl'];
      medicamento.laboratorio = this.form.value['laboratorioCtrl'];
      medicamento.cantidad = this.form.value['cantidadCtrl'];
      medicamento.precio = this.form.value['precioBarraCtrl'];
      medicamento.dosificacion = this.form.value['dosificacionCtrl'];

      Object.assign(medicamento, this.medicamentoService.editarMedicamentos(medicamento))
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
