import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dosificacion } from '../../../shared/models/dosificacion';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DosificacionService {


  dosificacionData: Dosificacion[] = [
    {id: 1, nombre: '50mg/12h', descripcion:'Descripcion', codigo: 'AK1'},
    {id: 2, nombre: '30mg/6h', descripcion:'Descripcion', codigo: 'AK2'},
    {id: 3, nombre: '15mg/8h', descripcion:'Descripcion', codigo: 'AK3'},
  ];

  constructor() { }

  //getDosificaciones(): Observable<Dosificacion[]> {
  getDosificaciones(): Dosificacion[]{
     //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
    return this.dosificacionData;
  }

   //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> {
  agregarDosificacion(dosificacion: Dosificacion):Dosificacion{
    //return this.http.post<Dosificacion>(environment.urlServer +'dosificacion/agregar',dosificacion)
    dosificacion.id = this.dosificacionData.length+1;
    this.dosificacionData.push(dosificacion);
    return dosificacion;
  }

  editarDosificacion(dosificacion: Dosificacion):Dosificacion{
    let indexDosificacion = this.dosificacionData.findIndex(item => item.id == dosificacion.id);
    Object.assign(this.dosificacionData[indexDosificacion], dosificacion);
    return dosificacion;
  }

  eliminarDosificacion(id:number){
    this.dosificacionData = this.dosificacionData.filter(item => item.id != id);
  }

  getDosificacionesFilter(input:string):Dosificacion[]{
    const match = this.dosificacionData.filter(element=>
      (element.nombre.toLowerCase().includes(input.toLowerCase()) || element.codigo.toLowerCase().includes(input.toLowerCase())))
    
    return match;
  }
}

