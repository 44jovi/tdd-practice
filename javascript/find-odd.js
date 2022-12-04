function findOdd(A) {
  let counter = {};

  A.forEach((n) => {
    counter[n] = (counter[n] || null) + 1;
  });

  for (key in counter) {
    if (counter[key] % 2 != 0) {
      return parseInt(key);
    }
  }
}

module.exports = findOdd;
