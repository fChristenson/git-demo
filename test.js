const returnOne = require("./main");

describe("returnOne test", () => {
  it("return one", () => {
    expect(returnOne()).toEqual(1);
  });
});
