function getMiddle(s) {
  const midpoint = s.length / 2.0;

  // If midpoint is an integer
  if (midpoint % 1 === 0) {
    return `${s[midpoint - 1]}${s[midpoint]}`;
    // If midpoint is a float
  } else {
    return `${s[Math.floor(midpoint)]}`;
  }
}

module.exports = getMiddle;
