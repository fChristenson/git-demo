const returnTwo = require("./main");

describe("ReturnTwo test", () => {
  it("return one", () => {
    expect(returnTwo()).toEqual(2);
  });
});
