// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // n % 10, take the remainer and add to (reversed * 10)
  // n / 10 and ignore fractions, run again so long as n != 0
  let reversed = 0;

  while (n !== 0) {
    reversed = (reversed * 10) + (n % 10);
    n = Math.trunc(n / 10); // trunc and not floor, floor breaks negative values
  }

  return reversed;
}

module.exports = reverseInt;
