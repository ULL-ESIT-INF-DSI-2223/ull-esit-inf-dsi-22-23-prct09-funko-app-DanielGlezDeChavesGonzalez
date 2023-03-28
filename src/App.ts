import { Usuario } from "./datatype/Usuario";
import fs from "fs";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Funko } from "./datatype/Funko";
import { Tipos, Genero } from "./datatype/Tipos";
import chalk from "chalk";

export class App {
  private Usuario: Map<string, Usuario> = new Map<string, Usuario>();

  constructor() {
    const folderPath = "./data";

    let folderNames: string[] = [];

    fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      folderNames = files
        .filter((file) => file.isDirectory())
        .map((file) => file.name);
    });

    this.cargarDatos(folderNames);
    this.iniciar();
  }

  private cargarDatos(nombresUsuarios: string[]) {
    nombresUsuarios.forEach((nombre) => {
      const usuario = new Usuario(nombre);
      let DirectorioFunkos = path.join("./data", nombre);
      usuario.cargarDatos(DirectorioFunkos);
      this.Usuario.set(nombre, usuario);
    });
  }

  private iniciar() {

  }
}
