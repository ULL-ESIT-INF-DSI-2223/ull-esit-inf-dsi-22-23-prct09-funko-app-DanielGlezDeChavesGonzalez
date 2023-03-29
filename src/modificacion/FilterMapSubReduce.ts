import { AlgorithmClass } from "./AlgorithmClass";

/**
 * clase que hereda de la clase AlgorithmClass
 */
export class FilterMapSubReduce extends AlgorithmClass {
  constructor(items: number[]) {
    super(items);
  }

  /**
   * función que reduce el array segun la operacion de resta
   * @param list lista de números
   * @returns devuelve la resta de todos los elementos de la lista
   */
  reduce(list: number[]): number {
    let result: number = 0;

    for (let i = 0; i < this.items.length; i++) {
      result -= list[i];
    }

    return result;
  }
}
