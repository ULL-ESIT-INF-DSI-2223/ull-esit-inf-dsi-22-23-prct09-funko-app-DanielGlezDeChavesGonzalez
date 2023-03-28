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

  public cargarDatos(DirectorioFunkos: string) {
    const folderPath = DirectorioFunkos;
    let nombresFunkos: string[] = [];

    const files = fs.readdirSync(folderPath, { withFileTypes: true });
    nombresFunkos = files
      .filter((file) => file.isFile())
      .map((file) => file.name);

    nombresFunkos.forEach((nombre) => {
      let rutaFunko = path.join(DirectorioFunkos, nombre);
      let funko = this.cargarFunko(rutaFunko);
      this.FunkoCollection.set(funko.id, funko);
    });
  }

  public addFunko(funko: Funko) {
    this.FunkoCollection.set(funko.id, funko);
  }

  public cargarFunko(rutaFunko: string): Funko {
    let funko: Funko = JSON.parse(fs.readFileSync(rutaFunko, "utf-8"));
    return funko;
  }

  public getFunko(id: number): Funko | undefined {
    return this.FunkoCollection.get(id);
  }

  public modificarFunko(id: number, funko: Funko) {
    this.FunkoCollection.set(id, funko);
  }
}
