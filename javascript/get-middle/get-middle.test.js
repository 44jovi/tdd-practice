const getMiddle = require("./get-middle");

describe("getMiddle - returns middle character(s) of a word", () => {
  it("Input: 'test'", () => {
    expect(getMiddle("test")).toBe("es");
  });

  it("Input: 'testing'", () => {
    expect(getMiddle("testing")).toBe("t");
  });

  it("Input: 'middle'", () => {
    expect(getMiddle("middle")).toBe("dd");
  });
});
