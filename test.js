const returnTwo = require("./main");

describe("returnTwo test", () => {
  it("return one", () => {
    expect(returnTwo()).toEqual(2);
  });
});
