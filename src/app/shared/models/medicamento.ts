export class Medicamento {

    id!:            number;
    codigoCompra!:  string;
    codigoBarra!:   string;
    nombre!:        string;
    laboratorio!:   string;
    cantidad!:      string;
    precio!:        string;
    dosificacion!:  string;
  
    public constructor(partial?: Partial<Medicamento>) {
      Object.assign(this, partial);
    }
}

