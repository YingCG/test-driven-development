const chai = window.chai;
const expect = chai.expect;

describe("getCelcius", () => {
  it("should convert farenheit to celcius for all values in an array", () => {
    expect(getCelcius([32])).to.deep.equal([0]);
    expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5]);
  });
});

describe("getFahrenheit", () => {
  it("should convert celcius to farenheit for all values in an array", () => {
    expect(getFahrenheit([0])).to.deep.equal([32]);
    // expect(getFahrenheit([-5, 60, 100, 5])).to.deep.equal([23, 140, 212, 41]);
  });
});
