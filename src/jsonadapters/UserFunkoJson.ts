import fs from "fs";
import { UserCollection } from "../collections/UserCollection";
import { User } from "../datatype/User";

type UserFunkoSchema = {
  id: number;
  nombre: string;
  tipo: string;
  genero: string;
  descripcion: string;
  numero_franquicia: number;
  exclusivo: boolean;
  caracteristicacas_especiales: string;
  precio: number;
};

export class UserFunkoJson extends UserCollection {
  private static file: string = "../../data/FunkoDB.json";

  constructor() {
    super();
    
  }

  public saveUser(username: string): void {}

  public loadUser(username: string): void {
  }

  public saveFunko(funko: UserFunkoSchema): void {}

  // public loadFunko(id: number): UserFunkoSchema {}

  public updateFunko(funko: UserFunkoSchema): void {}

  public deleteFunko(id: number): void {}

  // public loadAllFunkos(): UserFunkoSchema[] {}

  public deleteUser(): void {}
}
