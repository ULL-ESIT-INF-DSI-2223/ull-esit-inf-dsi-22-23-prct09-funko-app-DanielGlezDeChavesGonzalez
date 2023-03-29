import fs from "fs";
import { Funko } from "./datatype/Funko";
import { Tipos, Genero } from "./datatype/Tipos";
import chalk from "chalk";
import path from "path";

export class App {
  private Usuario: string;
  private Funkos: Map<number, Funko> = new Map<number, Funko>();

  constructor(user: string) {
    this.Usuario = user;
  }

  public cargarDatos(user: string) {
    const carpeta: string = "./data/" + user + "/";
    if (!fs.existsSync(carpeta)) {
      fs.mkdirSync("./data/" + user);
    }
    const archivos = fs.readdirSync(carpeta);
    if (archivos.length == 0) {
      console.log("No hay archivos");
    } else {
      archivos.forEach((archivo) => {
        const ruta: string = path.join(carpeta, archivo);
        const funko: Funko = JSON.parse(fs.readFileSync(ruta, "utf-8"));
        this.Funkos.set(funko.id, funko);
      });
    }
  }

  public guardarDatos() {
    this.Funkos.forEach((funko) => {
      if (!fs.existsSync("./data/" + this.Usuario + "/" + funko.id + ".json")) {
        fs.writeFileSync(
          "./data/" + this.Usuario + "/" + funko.id + ".json",
          JSON.stringify(funko)
        );
      }
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
  ): boolean {
    if (!this.Funkos.has(id)) {
      const funko = new Funko(
        id,
        name,
        description,
        Tipo,
        Genero,
        Franquicia,
        Numero_franquicia,
        Exclusivo,
        Caracteristicas_especiales,
        Precio
      );
      const ruta: string = "./data/" + user + "/" + id + ".json";
      fs.writeFileSync(ruta, JSON.stringify(funko));
      return true;
    } else {
      return false;
    }
  }

  public modifyFunko(
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
  ): boolean {
    if (this.Funkos.has(id)) {
      const funko = new Funko(
        id,
        name,
        description,
        Tipo,
        Genero,
        Franquicia,
        Numero_franquicia,
        Exclusivo,
        Caracteristicas_especiales,
        Precio
      );
      const ruta: string = "./data/" + this.Usuario + "/" + id + ".json";
      fs.writeFileSync(ruta, JSON.stringify(funko));
      return true;
    } else {
      return false;
    }
  }

  public removeFunko(id: number): boolean {
    if (this.Funkos.has(id)) {
      fs.unlinkSync("./data/" + this.Usuario + "/" + id + ".json");
      this.Funkos.delete(id);
      return true;
    }
    return false;
  }

  public listFunkos() {
    console.log("Funkos de " + this.Usuario);
    console.log("------------------");
    this.Funkos.forEach((funko) => {
      console.log(chalk.blue("ID: " + funko.id));
      console.log(chalk.blue(funko.name));
      console.log(chalk.blue(funko.description));
      console.log(chalk.blue(funko.Tipo));
      console.log(chalk.blue(funko.Genero));
      console.log(chalk.blue(funko.Franquicia));
      console.log(chalk.blue(funko.Numero_franquicia));
      console.log(chalk.blue("Exclusivo: " + funko.Exclusivo));
      console.log(chalk.blue(funko.Caracteristicas_especiales));
      console.log(chalk.blue(funko.Precio));
      console.log("------------------");
    });
  }

  public showFunkoById(id: number): boolean {
    if (this.Funkos.has(id)) {
      const funko = this.Funkos.get(id);
      if (funko != undefined) {
        console.log(chalk.blue("ID: " + funko.id));
        console.log(chalk.blue(funko.name));
        console.log(chalk.blue(funko.description));
        console.log(chalk.blue(funko.Tipo));
        console.log(chalk.blue(funko.Genero));
        console.log(chalk.blue(funko.Franquicia));
        console.log(chalk.blue(funko.Numero_franquicia));
        console.log(chalk.blue(funko.Exclusivo));
        console.log(chalk.blue(funko.Caracteristicas_especiales));
        console.log(chalk.blue(funko.Precio));
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
