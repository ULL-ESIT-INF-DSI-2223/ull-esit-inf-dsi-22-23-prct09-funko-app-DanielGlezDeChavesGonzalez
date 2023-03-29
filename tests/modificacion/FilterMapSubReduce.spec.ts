import "mocha";
import { expect } from "chai";
import { FilterMapSubReduce } from "../../src/modificacion/FilterMapSubReduce";

describe("FilterMapSubReduce", () => {
  it("should return 0", () => {
    const filterMapSubReduce = new FilterMapSubReduce([]);
    expect(filterMapSubReduce.run()).to.be.equal(0);
  });
  it("should return -6", () => {
    const filterMapSubReduce = new FilterMapSubReduce([1, 2, 3, 4]);
    expect(filterMapSubReduce.run()).to.be.equal(-18);
  });
});
