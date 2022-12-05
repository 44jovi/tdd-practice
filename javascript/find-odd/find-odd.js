function findOdd(A) {
  let counter = {};

  // Store count of each element in new object (hash map) for iterability
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
