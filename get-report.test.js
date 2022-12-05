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
});
