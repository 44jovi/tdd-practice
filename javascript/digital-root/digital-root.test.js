const digitalRoot = require("./digital-root");

describe("digitalRoot - returns the digital root of a given integer", () => {
  it("Input: 16", () => {
    expect(digitalRoot(16)).toBe(7);
  });

  xit("Input: 942", () => {
    expect(digitalRoot(942)).toBe(6);
  });
});
