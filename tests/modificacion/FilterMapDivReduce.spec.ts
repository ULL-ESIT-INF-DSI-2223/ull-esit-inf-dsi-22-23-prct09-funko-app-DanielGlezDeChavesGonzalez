import "mocha";
import { expect } from "chai";
import { FilterMapDivReduce } from "../../src/modificacion/FilterMapDivReduce";

describe("FilterMapDivReduce", () => {
  it("should return 0", () => {
    const filterMapDivReduce = new FilterMapDivReduce([]);
    expect(filterMapDivReduce.run()).to.be.equal(0);
  });
  it("should return 0", () => {
    const filterMapDivReduce = new FilterMapDivReduce([1, 2, 3, 4]);
    expect(filterMapDivReduce.run()).to.be.equal(0);
  });
});
