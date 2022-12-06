function digitalRoot(n) {
  let sum = n;
  let digitsArray = [];

  const sumArray = (array) => {
    let total = 0;
    array.forEach((digit) => {
      total += parseInt(digit);
    });
    return total;
  };

  if (sum <= 9) {
    return sum;
  }

  while (sum > 9) {
    digitsArray = sum.toString().split("");
    sum = sumArray(digitsArray);
    if (sum < 10) {
      return sum;
    }
  }
}

module.exports = digitalRoot;
