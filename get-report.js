// Future: consider refactoring into separate functions/classes

const getReport = (gradesCSV) => {
  const gradesArray = gradesCSV.split(", ");

  gradesArray.forEach((grade) => {
    if (grade.includes(" ")) {
      throw "Error - check input";
    }
  });

  const gradesCount = {};

  console.log(gradesArray);

  gradesArray.forEach((grade) => {
    // Change first character to uppercase
    // Change rest of characters to lowercase
    const formattedGrade =
      grade[0].toUpperCase() + grade.slice(1).toLowerCase();
    gradesCount[formattedGrade] = (gradesCount[formattedGrade] || null) + 1;
  });

  const greenGradesCount = `Green: ${gradesCount["Green"]}`;
  const amberGradesCount = `Amber: ${gradesCount["Amber"]}`;
  const redGradesCount = `Red: ${gradesCount["Red"]}`;

  let result = "";

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

  if (gradesCount["Red"]) {
    if (!result) {
      result += redGradesCount;
    } else {
      result += "\n" + redGradesCount;
    }
  }

  return result;
};

module.exports = getReport;
