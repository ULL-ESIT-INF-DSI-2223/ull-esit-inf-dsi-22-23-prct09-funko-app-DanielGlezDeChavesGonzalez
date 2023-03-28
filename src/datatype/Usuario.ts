import { Funko } from "./Funko";
import fs from "fs";
import path from "path";

export class Usuario {
  public nombre: string;
  private FunkoCollection: Map<Number, Funko>;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.FunkoCollection = new Map<Number, Funko>();
  }

  public cargarFunkos(ruta: string) {
    
  }
}
