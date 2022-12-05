const getReport = require("./get-report");

describe("getReport - given a string of grades, returns new string showing a count of each grade", () => {
  it("Given 'Green', return 'Green: 1'", () => {
    expect(getReport("Green")).toBe("Green: 1");
  });

  it("Given 'Green, Green', return 'Green: 2'", () => {
    expect(getReport("Green, Green")).toBe("Green: 2");
  });
});
