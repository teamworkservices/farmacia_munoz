import { Component, OnInit } from '@angular/core';
import { Laboratorios } from 'src/app/shared/models/laboratorios';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LaboratoriosService } from '../services/laboratorios.service';
import { CrearLaboratoriosComponent } from './crear-laboratorios/crear-laboratorios.component';
import { EditarLaboratoriosComponent } from './editar-laboratorios/editar-laboratorios.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent implements OnInit {

  laboratoriosData: Laboratorios[] = [];
  displayedColumns: string[] = ['id', 'nombre','codigo','acciones'];

  dataSource!: MatTableDataSource<Laboratorios>

  constructor(
    public dialog: MatDialog, 
    public laboratoriosService: LaboratoriosService
  ){}
  
  ngOnInit(): void {
    this.loadTableLaboratorios();
  }

  loadLaboratorios(){
    return this.laboratoriosService.getLaboratorios();
  }

  loadTableLaboratorios(){
    this.dataSource = new MatTableDataSource<Laboratorios>([]);
    this.dataSource.data = this.loadLaboratorios();
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
    dialogConfig.panelClass = 'dialog-custom';
    const dialogRef = this.dialog.open(CrearLaboratoriosComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if(!!result){
        this.loadLaboratorios(),
        this.loadTableLaboratorios();
      }
    });
  }
  
  openEditDialog(laboratorios: Laboratorios){
    
    const dialogRef = this.dialog.open(EditarLaboratoriosComponent, {
      width: "50%",
      data: laboratorios,
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadLaboratorios();
        this.loadTableLaboratorios();
      }
    });
  }

  eliminarLaboratorios(laboratorios: Laboratorios){

    Swal.fire({
      title: '¿Deseas eliminar la dosificación?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.laboratoriosService.eliminarLaboratorios(laboratorios.id);
        this.loadTableLaboratorios();
        Swal.fire('Saved!', '', 'success')
      }
    })

  }

}
