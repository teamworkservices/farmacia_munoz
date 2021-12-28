import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { Medicamento } from '../../../shared/models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  MedicamentosData: Medicamento[] = [
    {   id: 1,
        codigoCompra: 'AK', 
        codigoBarra: '08',
        nombre:'Aspirina',
        laboratorio:'Bayer',
        cantidad:'1',
        precio:'500',
        dosificacion:'50mg/12h',
    },
    {   id: 2,
        codigoCompra: 'AK', 
        codigoBarra: '09',
        nombre:'Descongel',
        laboratorio:'Genfar',
        cantidad:'2',
        precio:'1000',
        dosificacion:'30mg/6h',
    }
  ];

  constructor() { }

  //getDosificaciones(): Observable<Dosificacion[]> {
  getMedicamentos(): Medicamento[]{
     //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
    return this.MedicamentosData;
  }

   //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> {
  agregarMedicamentos(medicamento: Medicamento):Medicamento{
    //return this.http.post<Dosificacion>(environment.urlServer +'dosificacion/agregar',dosificacion)
    medicamento.id = this.MedicamentosData.length+1;
    this.MedicamentosData.push(medicamento);
    return medicamento;
  }

  editarMedicamentos(medicamento: Medicamento):Medicamento{
    let indexMedicamento = this.MedicamentosData.findIndex(item => item.id == medicamento.id);
    Object.assign(this.MedicamentosData[indexMedicamento], medicamento);
    return medicamento;
  }

  eliminarMedicamentos(id:number){
    this.MedicamentosData = this.MedicamentosData.filter(item => item.id != id);
  }
}

