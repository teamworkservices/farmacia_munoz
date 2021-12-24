import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Laboratorios } from 'src/app/shared/models/laboratorios';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LaboratoriosService {

  laboratoriosData: Laboratorios[] = [
    {id: 1, nombre: 'Lorena Vejarano', descripcion:'Descripcion', codigo: 'L'},
    {id: 2, nombre: 'Martha Perdomo', descripcion:'Descripcion', codigo: 'L'},
  ];

  constructor() { }

  //getDosificaciones(): Observable<Dosificacion[]> {
  getLaboratorios(): Laboratorios[]{
     //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
    return this.laboratoriosData;
  }

   //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> {
  agregarLaboratorios(laboratorios: Laboratorios):Laboratorios{
    //return this.http.post<Dosificacion>(environment.urlServer +'dosificacion/agregar',dosificacion)
    laboratorios.id = this.laboratoriosData.length+1;
    this.laboratoriosData.push(laboratorios);
    return laboratorios;
  }

  editarLaboratorios(laboratorios: Laboratorios):Laboratorios{
    let indexLaboratorios = this.laboratoriosData.findIndex(item => item.id == laboratorios.id);
    Object.assign(this.laboratoriosData[indexLaboratorios], laboratorios);
    return laboratorios;
  }

  eliminarLaboratorios(id:number){
    this.laboratoriosData = this.laboratoriosData.filter(item => item.id != id);
  }
}

