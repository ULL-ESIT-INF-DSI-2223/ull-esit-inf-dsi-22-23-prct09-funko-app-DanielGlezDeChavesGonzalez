import { Funko } from "./Funko";
import { FunkoCollection } from "../collections/FunkoCollection";

export class User {
  private static registro_id: number[] = [];
  private nombre: string;
  public id: number;
  private FunkoCollection: FunkoCollection;

  constructor(nombre: string, id: number) {
    this.FunkoCollection = new FunkoCollection();
    this.nombre = nombre;
    this.id = id;
  }

  public getNombre(): string {
    return this.nombre;
  }
}
