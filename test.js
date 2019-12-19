const returnOne = require("./main");

describe("ReturnOne test", () => {
  it("return one", () => {
    expect(returnOne()).toEqual(1);
  });
});
