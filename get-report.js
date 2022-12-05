// Future: consider refactoring into separate functions/classes

const getReport = (gradesCSV) => {
  // Convert all chars to lower case
  // Capitalise first letter of each word

  const gradesArray = gradesCSV.split(", ");

  const gradesCount = {};

  gradesArray.forEach((grade) => {
    // Change first character to uppercase
    const formattedGrade = grade[0].toUpperCase() + grade.slice(1);
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
