import "mocha";
import { expect } from "chai";
import { FilterMapAddReduce } from "../../src/modificacion/FilterMapAddReduce";

describe("FilterMapAddReduce", () => {
  it("should return 0", () => {
    const filterMapAddReduce = new FilterMapAddReduce([]);
    expect(filterMapAddReduce.run()).to.be.equal(0);
  });
  it("should return 6", () => {
    const filterMapAddReduce = new FilterMapAddReduce([1, 2, 3]);
    expect(filterMapAddReduce.run()).to.be.equal(6);
  });
});
