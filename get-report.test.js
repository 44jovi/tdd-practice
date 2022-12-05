const getReport = require("./get-report");

describe("getReport - given a string of grades, returns new string showing a count of each grade", () => {
  it("Given 'Green', return 'Green: 1'", () => {
    expect(getReport("Green")).toBe("Green: 1");
  });
});
