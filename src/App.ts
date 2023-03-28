import { Usuario } from "./datatype/Usuario";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Funko } from "./datatype/Funko";
import { Tipos, Genero } from "./datatype/Tipos";
import chalk from "chalk";

export class App {
  private Usuarios: Map<string, Usuario> = new Map<string, Usuario>();

  constructor() {
    const folderPath = "./data";

    let UsersFolders: string[] = [];

    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      files.forEach((file) => {
        UsersFolders.push(folderPath + "/" + file);
      });
    });

    this.cargarDatos(UsersFolders);
  }

  private cargarDatos(UsersFolders: string[]) {
    UsersFolders.forEach((ruta) => {
      let nombre_usuario = ruta.split("/")[2];
      const usuario = new Usuario(nombre_usuario);
      usuario.cargarFunkos(ruta);
      this.Usuarios.set(nombre_usuario, usuario);
    });
  }
}
