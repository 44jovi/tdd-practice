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

  it("Input: 1 grade colour, mix of lowercase and uppercase", () => {
    expect(getReport("red")).toBe("Red: 1");
    expect(getReport("RED")).toBe("Red: 1");
    expect(getReport("ReD")).toBe("Red: 1");
    expect(getReport("rEd")).toBe("Red: 1");
  });
});
