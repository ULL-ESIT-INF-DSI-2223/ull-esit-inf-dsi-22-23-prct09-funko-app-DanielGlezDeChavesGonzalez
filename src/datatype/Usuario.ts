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

  public cargarFunkos() {
    const carpeta: string = "../data/" + this.nombre + "/";
    const archivos: string[] = fs.readdirSync(carpeta);
    archivos.forEach((archivo) => {
      const ruta: string = path.join(carpeta, archivo);
      const funko: Funko = JSON.parse(fs.readFileSync(ruta, "utf-8"));
      this.FunkoCollection.set(funko.id, funko);
    });
  }

  public getFunkos(): Map<Number, Funko> {
    return this.FunkoCollection;
  }

  public guardarFunkos() {
    this.FunkoCollection.forEach((funko) => {
      const ruta: string = "../data/" + this.nombre + "/" + funko.id + ".json";
      fs.writeFileSync(ruta, JSON.stringify(funko));
    });
  }
}
