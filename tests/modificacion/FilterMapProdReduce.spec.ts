import "mocha";
import { expect } from "chai";
import { FilterMapProdReduce } from "../../src/modificacion/FilterMapProdReduce";

describe("FilterMapProdReduce", () => {
  it("should return 0", () => {
    const filterMapProdReduce = new FilterMapProdReduce([]);
    expect(filterMapProdReduce.run()).to.be.equal(0);
  });
  it("should return 6", () => {
    const filterMapProdReduce = new FilterMapProdReduce([1, 2, 3, 4]);
    expect(filterMapProdReduce.run()).to.be.equal(0);
  });
});
