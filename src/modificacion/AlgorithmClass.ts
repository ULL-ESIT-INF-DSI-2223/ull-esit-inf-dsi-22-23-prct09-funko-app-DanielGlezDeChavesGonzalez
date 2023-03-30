/**
 * Clase abstracta que contiene los métodos que se van a utilizar en los algoritmos
 */
export abstract class AlgorithmClass {
  protected items: number[];
  constructor(items: number[]) {
    this.items = items;
  }

  /**
   * función que recorre el array y ejecuta la función que se le pasa por parámetro
   * @param fn función que se va a ejecutar en cada elemento del array
   * @returns devuelve un array con los elementos modificados
   */
  protected map(
    fn: (item: number) => number = (item: number) => item * 3
  ): number[] {
    let result: number[] = [];
    for (let i = 0; i < this.items.length; i++) {
      result.push(fn(this.items[i]));
    }
    return result;
  }

  /**
   * función que recorre el array y ejecuta la función que se le pasa por parámetro
   * @param fn función que se va a ejecutar en cada elemento del array
   * @returns devuelve un array con los elementos filtrados
   */
  protected filter(
    fn: (item: number) => boolean = (item: number) => item % 2 === 0
  ): number[] {
    let result: number[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (fn(this.items[i])) {
        result.push(this.items[i]);
      }
    }
    return result;
  }

  /**
   * función que imprime por consola el array después de ejecutar el método filter
   */
  protected afterFilter() {
  }

  /**
   * función que imprime por consola el array después de ejecutar el método map
   */
  protected afterMap() {
  }

  /**
   * función que imprime por consola el array después de ejecutar el método reduce
   */
  protected afterReduce() {
  }

  /**
   * función que recorre el array y reduce los elementos a un único valor segun la clase que herede de esta
   * @param list array de números
   */
  abstract reduce(): number;

  /**
   * función que ejecuta los métodos filter, map y reduce
   * @returns devuelve el resultado de ejecutar los métodos filter, map y reduce
   */
  public run(): number {
    this.items = this.filter();
    this.afterFilter();
    this.items = this.map();
    this.afterMap();
    let result: number = this.reduce();
    this.afterReduce();
    return result;
  }
}
