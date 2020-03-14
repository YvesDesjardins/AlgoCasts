// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // built in function reverse + compare
  // return str === str.split('').reverse().join('');

  // custom comparison, O(log n)?
  let left = 0, right = str.length;
  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right++;
    }
    else {
      return false;
    }
  }

  return true;
}

module.exports = palindrome;
