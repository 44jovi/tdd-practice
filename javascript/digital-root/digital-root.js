function digitalRoot(n) {
  // Convert n to array of strings
  nStrings = n.toString().split("");

  // Convert strings back into integers
  nDigits = nStrings.map((digit) => {
    return parseInt(digit);
  });

  let sum = 0;

  if (sum === 0) {
    nDigits.forEach((digit) => {
      sum += digit;
    });
  }

  return sum;
}

module.exports = digitalRoot;
