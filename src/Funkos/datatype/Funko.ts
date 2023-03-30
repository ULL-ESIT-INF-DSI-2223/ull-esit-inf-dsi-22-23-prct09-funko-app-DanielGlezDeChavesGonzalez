import { Genero, Tipos } from "./Tipos";

export class Funko {
  id: number;
  name: string;
  description: string;
  Tipo: Tipos;
  Genero: Genero;
  Franquicia: string;
  Numero_franquicia: number;
  Exclusivo: boolean;
  Caracteristicas_especiales: string;
  Precio: number;

  constructor(
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
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Tipo = Tipo;
    this.Genero = Genero;
    this.Franquicia = Franquicia;
    this.Numero_franquicia = Numero_franquicia;
    this.Exclusivo = Exclusivo;
    this.Caracteristicas_especiales = Caracteristicas_especiales;
    this.Precio = Precio;
  }
}
