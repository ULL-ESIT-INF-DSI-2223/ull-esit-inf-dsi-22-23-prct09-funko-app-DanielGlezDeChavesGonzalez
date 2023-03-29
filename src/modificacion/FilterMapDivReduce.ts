import { AlgorithmClass } from "./AlgorithmClass";

export class FilterMapDivReduce extends AlgorithmClass {
  constructor(items: number[]) {
    super(items);
  }

  /**
   * función que reduce el array segun la operacion de division
   * @param list lista de números
   * @returns devuelve la división de todos los elementos de la lista
   */
  reduce(): number {
    let result: number = 0;

    for (let i = 0; i < this.items.length; i++) {
      result /= this.items[i];
    }

    return result;
  }

}
