function getMiddle(s) {
  // Get word char length
  // Divide by 2
  // If result is float
  // - round up to nearest integer
  // - return char at index of the integer

  const midpoint = s.length / 2.0;

  if (midpoint % 1 === 0) {
    return `${s[midpoint - 1]}${s[midpoint]}`;
  } else {
    return `${s[Math.floor(midpoint)]}`;
  }
}

module.exports = getMiddle;
