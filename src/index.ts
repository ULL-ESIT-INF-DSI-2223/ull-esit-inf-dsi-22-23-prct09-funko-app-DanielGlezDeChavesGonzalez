import { App } from "./FunkoApp";
import fs from "fs";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Funko } from "./datatype/Funko";
import { Tipos, Genero, asignarTipo, asignarGenero } from "./datatype/Tipos";
import chalk from "chalk";

yargs(hideBin(process.argv))
  .command(
    "add",
    "Adds a funko",
    {
      user: {
        description: "User name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      nombre: {
        description: "Funko name",
        type: "string",
        demandOption: true,
      },
      descripcion: {
        description: "Funko description",
        type: "string",
        demandOption: true,
      },
      tipo: {
        description: "Funko type",
        type: "string",
        demandOption: true,
      },
      genero: {
        description: "Genere of the funko",
        type: "string",
        demandOption: true,
      },
      franquicia: {
        description: "Funko franchise",
        type: "string",
        demandOption: true,
      },
      numero_franchise: {
        description: "Funko franchise number",
        type: "number",
        demandOption: true,
      },
      exclusivo: {
        description: "Funko exclusive",
        type: "boolean",
        demandOption: true,
      },
      caracteristicas_especiales: {
        description: "Funko special features",
        type: "string",
        demandOption: true,
      },
      precio: {
        description: "Funko price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const app = new App();
      app.cargarDatos();
      let tipo: Tipos;
      let genero: Genero;
      tipo = asignarTipo(argv.tipo);
      genero = asignarGenero(argv.genero);
      app.addFunko(
        argv.user,
        argv.id,
        argv.nombre,
        argv.descripcion,
        tipo,
        genero,
        argv.franquicia,
        argv.numero_franchise,
        argv.exclusivo,
        argv.caracteristicas_especiales,
        argv.precio
      );
      app.guardarDatos();
      console.log(chalk.green("Funko added successfully"));
    }
  )
  .help().argv;
