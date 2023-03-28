import { Funko } from "./Funko";
import { FunkoCollection } from "../collections/FunkoCollection";

export class User {
  private static registro_id: number[] = [];
  private nombre: string;
  public id: number;
  private FunkoCollection: FunkoCollection;
  private static user_id: number = 0;

  constructor(nombre: string) {
    this.FunkoCollection = new FunkoCollection();
    this.nombre = nombre;
    this.id = User.user_id++;
  }

  public getNombre(): string {
    return this.nombre;
  }
}
