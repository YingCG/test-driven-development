import { getLetterCount } from "./letter-count";
import { expect } from "chai";

// describe to group all the test together, it is individual test
describe("getLetterCount -basic functionality", () => {
  it("returns an empty object when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("return the correct letter count for a word with only one of each letter", () => {});
});
