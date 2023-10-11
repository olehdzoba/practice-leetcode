var VOWELS = ["a", "e", "i", "o", "u"];

/**
 * @param {string} string
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (string, k) {
  var pointer = 0;
  var maxCount = 0;
  var currCount = 0;

  while (pointer <= string.length) {
    var right = string[pointer];
    var left = string[pointer - k];

    if (VOWELS.includes(right)) currCount += 1;
    if (VOWELS.includes(left)) currCount -= 1;

    maxCount = Math.max(maxCount, currCount);

    pointer += 1;
  }

  return maxCount;
};
