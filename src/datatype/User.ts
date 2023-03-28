import { Funko } from "./Funko";

export class User {
  private static registro_id: number[] = [];
  private nombre: string;
  public id: number;
  private FunkoCollection: Map<number, Funko>;
  private static user_id: number = 0;

  constructor(nombre: string) {
    this.FunkoCollection = new Map<number, Funko>();
    this.nombre = nombre;
    this.id = User.user_id++;
  }

  public getNombre(): string {
    return this.nombre;
  }
}
