export class Laboratorios {
    id!: number;
    codigo!: string;
    nombre!: string;
    descripcion!: string;
  
    public constructor(partial?: Partial<Laboratorios>) {
      Object.assign(this, partial);
    }
}