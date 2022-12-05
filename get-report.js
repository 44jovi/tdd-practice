const getReport = (gradesCSV) => {
  const gradesCount = {};

  // Split string into array of strings
  const gradesArray = gradesCSV.split(", ");

  // Create new object (hash map) storing a count of each grade
  gradesArray.forEach((grade) => {
    gradesCount[grade] = (gradesCount[grade] || null) + 1;
  });

  // Green count
  return `Green: ${gradesCount["Green"]}`;
};

module.exports = getReport;
