const getReport = (gradesCSV) => {
  const gradesCount = {};

  const gradesArray = gradesCSV.split(", ");

  gradesArray.forEach((grade) => {
    gradesCount[grade] = (gradesCount[grade] || null) + 1;
  });

  const greenGradesCount = `Green: ${gradesCount["Green"]}`;
  const amberGradesCount = `Amber: ${gradesCount["Amber"]}`;

  let result = "";

  // If grade colour != 0, add to result
  // If result is not an empty string, prefix with \n
  if (gradesCount["Green"]) {
    if (!result) {
      result += greenGradesCount;
    } else {
      result += "\n" + greenGradesCount;
    }
  }

  if (gradesCount["Amber"]) {
    if (!result) {
      result += amberGradesCount;
    } else {
      result += "\n" + amberGradesCount;
    }
  }

  return result;
};

module.exports = getReport;
