import { Usuario } from "./datatype/Usuario";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Funko } from "./datatype/Funko";
import { Tipos, Genero } from "./datatype/Tipos";
import chalk from "chalk";
import path from "path";

export class App {
  private Usuarios: Usuario[] = [];
  private Funkos: Map<string, Funko> = new Map<string, Funko>();

  constructor() {}

  public cargarDatos() {
    const carpeta: string = "../data/";
    const archivos: string[] = fs.readdirSync(carpeta);
    archivos.forEach((archivo) => {
      const ruta: string = path.join(carpeta, archivo);
      const usuario: Usuario = JSON.parse(fs.readFileSync(ruta, "utf-8"));
      this.Usuarios.push(usuario);
    });

    this.Usuarios.forEach((usuario) => {
      usuario.cargarFunkos();
    });

    this.Usuarios.forEach((usuario) => {
      usuario.getFunkos().forEach((funko) => {
        this.Funkos.set(usuario.nombre, funko);
      });
    });
  }

  public guardarDatos() {
    this.Usuarios.forEach((usuario) => {
      usuario.guardarFunkos();
    });
    
  }

  public addFunko(
    user: string,
    id: number,
    name: string,
    description: string,
    Tipo: Tipos,
    Genero: Genero,
    Franquicia: string,
    Numero_franquicia: number,
    Exclusivo: boolean,
    Caracteristicas_especiales: string,
    Precio: number
  ) {}

  public modifyFunko() {}

  public deleteFunko() {}

  public listFunkos() {}

  public showFunkoById() {}
}
