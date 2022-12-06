const getMiddle = require("./get-middle");

describe("getMiddle - returns middle character(s) of a word", () => {
  it("Input: 'test'", () => {
    expect(getMiddle("test")).toBe("es");
  });
});
