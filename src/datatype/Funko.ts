import { Tipo } from "./Types";
import { Genero } from "./Types";

export class Funko {
  private static registro_id: number[] = [];

  constructor(
    public id: number,
    private nombre: string,
    private tipo: Tipo,
    private genero: Genero,
    private descripcion: string,
    private numero_franquicia: number,
    private exclusivo: boolean,
    private caracteristicacas_especiales: string,
    private precio: number
  ) {
    this.id = id;
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }
}
