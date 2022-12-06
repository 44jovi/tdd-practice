const digitalRoot = require("./digital-root");

describe("digitalRoot - returns the digital root of a given integer", () => {
  it("Input: 9", () => {
    expect(digitalRoot(9)).toBe(9);
  });

  it("Input: 16", () => {
    expect(digitalRoot(16)).toBe(7);
  });

  it("Input: 942", () => {
    expect(digitalRoot(942)).toBe(6);
  });

  it("Input: 132189", () => {
    expect(digitalRoot(132189)).toBe(6);
  });

  it("Input: 493193", () => {
    expect(digitalRoot(493193)).toBe(2);
  });

  it("Input: 123456789", () => {
    expect(digitalRoot(123456789)).toBe(9);
  });
});
