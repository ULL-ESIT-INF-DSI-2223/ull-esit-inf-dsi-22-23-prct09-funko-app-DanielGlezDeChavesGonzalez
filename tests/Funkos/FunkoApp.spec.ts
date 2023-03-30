import "mocha";
import { expect } from "chai";
import { App } from "../../src/Funkos/FunkoApp";
import { Funko } from "../../src/Funkos/datatype/Funko";
import { Tipos, Genero } from "../../src/Funkos/datatype/Tipos";

describe("FunkoApp", () => {
  it("should cargar datos", () => {
    const funkoApp = new App("user");
    let funciona = funkoApp.cargarDatos("user");
    funkoApp.addFunko(
      "user",
      1,
      "nombre",
      "desc",
      Tipos.Pop,
      Genero.Anime,
      "franq",
      1,
      true,
      "car_e",
      1
    );
    funkoApp.guardarDatos();
    expect(funciona).to.be.equal(false);
    funkoApp.guardarDatos();
  });
  it("should cargar datos", () => {
    const funkoApp = new App("user");
    let funciona = funkoApp.cargarDatos("user");
    expect(funciona).to.be.equal(true);
  });
  it("should guardar datos", () => {
    const funkoApp = new App("user");
    funkoApp.cargarDatos("user");
    let funciona = funkoApp.guardarDatos();
    expect(funciona).to.be.equal(true);
  });
  it("should add a funko", () => {
    const funkoApp = new App("user");
    let added = funkoApp.addFunko(
      "user",
      1,
      "nombre",
      "desc",
      Tipos.Pop,
      Genero.Anime,
      "franq",
      1,
      true,
      "car_e",
      1
    );
    expect(added).to.be.equal(true);
  });
  it("should modify a funko", () => {
    const funkoApp = new App("user");
    funkoApp.cargarDatos("user");
    let modified = funkoApp.modifyFunko(
      1,
      "nombre2",
      "desc2",
      Tipos.Pop,
      Genero.Anime,
      "franq2",
      2,
      false,
      "car_e2",
      2
    );
    expect(modified).to.be.equal(true);
  });
  it("should get a funko", () => {
    const funkoApp = new App("user");
    funkoApp.cargarDatos("user");
    const funko = funkoApp.getFunko(1);
    expect(funko).to.be.equal(true);
  });
  it("should list funkos", () => {
    const funkoApp = new App("user");
    funkoApp.cargarDatos("user");
    const funkos = funkoApp.listFunkos();
    expect(funkos).to.be.equal(true);
  });
  it("should read a funko by id", () => {
    const funkoApp = new App("user");
    funkoApp.cargarDatos("user");
    const funko = funkoApp.showFunkoById(1);
    expect(funko).to.be.equal(true);
  });

  it("should delete a funko", () => {
    const funkoApp = new App("user");
    funkoApp.cargarDatos("user");
    let removed = funkoApp.removeFunko(1);
    const funko = funkoApp.getFunko(1);
    expect(removed).to.be.equal(true);
  });
});
