const getReport = require("./get-report");

describe("getReport - given a string of grades, returns new string showing a count of each grade", () => {
  it("Given 'Green', return 'Green: 1'", () => {
    expect(getReport("Green")).toBe("Green: 1");
  });

  it("Input: 'Green, Green'", () => {
    expect(getReport("Green, Green")).toBe("Green: 2");
  });

  it("Input: 'Green, Amber'", () => {
    expect(getReport("Green, Amber")).toBe("Green: 1\nAmber: 1");
  });

  it("Input: 'Green, Amber, Red'", () => {
    expect(getReport("Green, Amber, Red")).toBe("Green: 1\nAmber: 1\nRed: 1");
  });

  it("Input: 'Green, Green, Red, Amber, Red'", () => {
    expect(getReport("Green, Green, Red, Amber, Red")).toBe(
      "Green: 2\nAmber: 1\nRed: 2"
    );
  });

  it("Input: 1 grade colour (count: 1), mix of lowercase and uppercase", () => {
    expect(getReport("red")).toBe("Red: 1");
    expect(getReport("RED")).toBe("Red: 1");
    expect(getReport("ReD")).toBe("Red: 1");
    expect(getReport("rEd")).toBe("Red: 1");
  });

  it("Input: 3 grade colours in different orders (count: 1 each), mix of lowercase and uppercase", () => {
    expect(getReport("red, GrEeN, AMBER")).toBe("Green: 1\nAmber: 1\nRed: 1");
    expect(getReport("ambeR, RED, GreEN")).toBe("Green: 1\nAmber: 1\nRed: 1");
    expect(getReport("GREEn, reD")).toBe("Green: 1\nRed: 1");
  });

  it("Input: 3 grade colours in different orders (count: varying), mix of lowercase and uppercase", () => {
    expect(getReport("red, GrEeN, GreEN, AMBER")).toBe(
      "Green: 2\nAmber: 1\nRed: 1"
    );
    expect(getReport("ambeR, RED, GreEN, reD, aMber")).toBe(
      "Green: 1\nAmber: 2\nRed: 2"
    );
    expect(getReport("GREEn, reD, red, RED")).toBe("Green: 1\nRed: 3");
  });
});
