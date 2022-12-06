function digitalRoot(n) {
  let sum = n;
  let digitsArray = [];

  // Sum of an array of number strings
  const sumArray = (array) => {
    let total = 0;
    array.forEach((digit) => {
      total += parseInt(digit);
    });
    return total;
  };

  // If input already a single digit
  if (sum <= 9) {
    return sum;
  }

  // Continued reduction until sum is a single digit
  while (sum > 9) {
    digitsArray = sum.toString().split("");
    sum = sumArray(digitsArray);
    if (sum < 10) {
      return sum;
    }
  }
}

module.exports = digitalRoot;
