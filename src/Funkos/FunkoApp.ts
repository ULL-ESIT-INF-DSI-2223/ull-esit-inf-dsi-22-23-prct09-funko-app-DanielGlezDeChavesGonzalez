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

  public cargarDatos(user: string): boolean {
    const carpeta: string = "./data/" + user + "/";
    if (!fs.existsSync(carpeta)) {
      fs.mkdirSync("./data/" + user);
    }
    const archivos = fs.readdirSync(carpeta);

    if (archivos.length == 0) {
      return false;
    } else {
      archivos.forEach((archivo) => {
        const ruta: string = path.join(carpeta, archivo);
        const funko: Funko = JSON.parse(fs.readFileSync(ruta, "utf-8"));
        this.Funkos.set(funko.id, funko);
      });
    }
    return true;
  }

  public guardarDatos(): boolean {
    this.Funkos.forEach((funko) => {
      if (!fs.existsSync("./data/" + this.Usuario + "/" + funko.id + ".json")) {
        fs.writeFileSync(
          "./data/" + this.Usuario + "/" + funko.id + ".json",
          JSON.stringify(funko)
        );
      }
    });
    return true;
  }

  public getFunko(id: number): Funko | undefined {
    return this.Funkos.get(id);
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

  public listFunkos(): boolean {
    console.log(chalk.green("Funkos de " + this.Usuario));
    console.log(chalk.green("------------------"));
    this.Funkos.forEach((funko) => {
      if (funko.Precio <= 100) {
        console.log(chalk.blue("ID: " + funko.id));
        console.log(chalk.blue("Nombre: " + funko.name));
        console.log(chalk.blue("Descripcion: " + funko.description));
        console.log(chalk.blue("Tipo: " + funko.Tipo));
        console.log(chalk.blue("Genero: " + funko.Genero));
        console.log(chalk.blue("Franquicia: " + funko.Franquicia));
        console.log(
          chalk.blue("Numero de franquicia: " + funko.Numero_franquicia)
        );
        console.log(chalk.blue("Exclusivo: " + funko.Exclusivo));
        console.log(
          chalk.blue(
            "Caracteristicas especiales: " + funko.Caracteristicas_especiales
          )
        );
        console.log(chalk.blue("Precio: " + funko.Precio));
        console.log(chalk.blue("------------------"));
      } else if (funko.Precio > 100 && funko.Precio <= 250) {
        console.log(chalk.yellow("ID: " + funko.id));
        console.log(chalk.yellow("Nombre: " + funko.name));
        console.log(chalk.yellow("Descripcion: " + funko.description));
        console.log(chalk.yellow("Tipo: " + funko.Tipo));
        console.log(chalk.yellow("Genero: " + funko.Genero));
        console.log(chalk.yellow("Franquicia: " + funko.Franquicia));
        console.log(
          chalk.yellow("Numero de franquicia: " + funko.Numero_franquicia)
        );
        console.log(chalk.yellow("Exclusivo: " + funko.Exclusivo));
        console.log(
          chalk.yellow(
            "Caracteristicas especiales: " + funko.Caracteristicas_especiales
          )
        );
        console.log(chalk.yellow("Precio: " + funko.Precio));
        console.log(chalk.yellow("------------------"));
      } else if (funko.Precio > 250 && funko.Precio <= 500) {
        console.log(chalk.red("ID: " + funko.id));
        console.log(chalk.red("Nombre: " + funko.name));
        console.log(chalk.red("Descripcion: " + funko.description));
        console.log(chalk.red("Tipo: " + funko.Tipo));
        console.log(chalk.red("Genero: " + funko.Genero));
        console.log(chalk.red("Franquicia: " + funko.Franquicia));
        console.log(
          chalk.red("Numero de franquicia: " + funko.Numero_franquicia)
        );
        console.log(chalk.red("Exclusivo: " + funko.Exclusivo));
        console.log(
          chalk.red(
            "Caracteristicas especiales: " + funko.Caracteristicas_especiales
          )
        );
        console.log(chalk.red("Precio: " + funko.Precio));
        console.log(chalk.red("------------------"));
      } else {
        console.log(chalk.green("ID: " + funko.id));
        console.log(chalk.green("Nombre: " + funko.name));
        console.log(chalk.green("Descripcion: " + funko.description));
        console.log(chalk.green("Tipo: " + funko.Tipo));
        console.log(chalk.green("Genero: " + funko.Genero));
        console.log(chalk.green("Franquicia: " + funko.Franquicia));
        console.log(
          chalk.green("Numero de franquicia: " + funko.Numero_franquicia)
        );
        console.log(chalk.green("Exclusivo: " + funko.Exclusivo));
        console.log(
          chalk.green(
            "Caracteristicas especiales: " + funko.Caracteristicas_especiales
          )
        );
        console.log(chalk.green("Precio: " + funko.Precio));
        console.log(chalk.green("------------------"));
      }
    });
    return true;
  }

  public showFunkoById(id: number): boolean {
    if (this.Funkos.has(id)) {
      const funko = this.Funkos.get(id);
      if (funko != undefined) {
        console.log(chalk.gray("ID: " + funko.id));
        console.log(chalk.gray("Nombre: " + funko.name));
        console.log(chalk.gray("Descripcion: " + funko.description));
        console.log(chalk.gray("Tipo: " + funko.Tipo));
        console.log(chalk.gray("Genero: " + funko.Genero));
        console.log(chalk.gray("Franquicia: " + funko.Franquicia));
        console.log(
          chalk.gray("Numero de franquicia: " + funko.Numero_franquicia)
        );
        console.log(chalk.gray("Exclusivo: " + funko.Exclusivo));
        console.log(
          chalk.gray(
            "Caracteristicas especiales: " + funko.Caracteristicas_especiales
          )
        );
        console.log(chalk.gray("Precio: " + funko.Precio));
        console.log(chalk.gray("------------------"));
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
