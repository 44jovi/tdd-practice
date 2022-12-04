const findOdd = require("./find-odd");

describe("findOdd", () => {
  it("given [7], return 7", () => {
    const input = [7];
    expect(findOdd(input)).toBe(7);
  });

  it("given [0], return 0", () => {
    const input = [0];
    expect(findOdd(input)).toBe(0);
  });

  it("given [1, 1, 2], return 2", () => {
    const input = [1, 1, 2];
    expect(findOdd(input)).toBe(2);
  });

  it("given [0, 1, 0, 1, 0], return 0", () => {
    const input = [0, 1, 0, 1, 0];
    expect(findOdd(input)).toBe(0);
  });

  it("given [1,2,2,3,3,3,4,3,3,3,2,2,1], return 4", () => {
    const input = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
    expect(findOdd(input)).toBe(4);
  });
});
