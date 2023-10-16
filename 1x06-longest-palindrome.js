// 25-03-2023

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (string) => {
  let mapping = {};

  for (let char of string) {
    mapping[char] = mapping[char] ? mapping[char] + 1 : 1;
  }

  let pairs = 0;
  for (let count of Object.values(mapping)) {
    pairs += Math.floor(count / 2);
  }

  let palindrome = pairs * 2;
  if (string.length > palindrome) palindrome++;

  return palindrome;
};
