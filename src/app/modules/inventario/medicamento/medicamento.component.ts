import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../../shared/models/medicamento';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MedicamentoService } from '../services/medicamento.service';
import Swal from 'sweetalert2';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { EditarMedicamentoComponent } from './editar-medicamento/editar-medicamento.component';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  MedicamentosData: Medicamento[] = [];
  displayedColumns: string[] = [
    'id', 
    'codigoCompra',
    'codigoBarra',
    'nombre',
    'laboratorio',
    'cantidad',
    'precio',
    'dosificacion',
    'acciones'
  ];

  dataSource!: MatTableDataSource<Medicamento>

  constructor(
    public dialog: MatDialog, 
    public medicamentoService: MedicamentoService,
  ){}
  
  ngOnInit(): void {
    this.loadTableMedicamentos();
  }

  loadMedicamentos(){
    return this.medicamentoService.getMedicamentos();
  }

  loadTableMedicamentos(){
    this.dataSource = new MatTableDataSource<Medicamento>([]);
    this.dataSource.data = this.loadMedicamentos();
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
    dialogConfig.panelClass = 'dialog-custom';
    const dialogRef = this.dialog.open(CrearMedicamentoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if(!!result){
        this.loadMedicamentos(),
        this.loadTableMedicamentos();
      }
    });
  }
  
  openEditDialog(medicamento: Medicamento){
    
    const dialogRef = this.dialog.open(EditarMedicamentoComponent, {
      width: "50%",
      data: medicamento,
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadMedicamentos();
        this.loadTableMedicamentos();
      }
    });
  }

  eliminarLaboratorios(medicamento: Medicamento){

    Swal.fire({
      title: '¿Deseas eliminar el medicamento?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicamentoService.eliminarMedicamentos(medicamento.id);
        this.loadTableMedicamentos();
        Swal.fire('Saved!', '', 'success')
      }
    })

  }


}
