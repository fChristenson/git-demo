const returnTwo = require("./main");

describe("Return foobar test", () => {
  it("return one", () => {
    expect(returnTwo()).toEqual(2);
  });
});
