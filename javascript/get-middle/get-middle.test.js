const getMiddle = require("./get-middle");

describe("getMiddle - returns middle character(s) of a word", () => {
  it("Input: even character length (4)", () => {
    expect(getMiddle("test")).toBe("es");
  });

  it("Input: odd character length (7)", () => {
    expect(getMiddle("testing")).toBe("t");
  });

  it("Input: even character length (6)", () => {
    expect(getMiddle("middle")).toBe("dd");
  });

  it("Input: single character'", () => {
    expect(getMiddle("A")).toBe("A");
  });
});
