// 21-09-2023

/**
 * @param {string} s
 * @return {string}
 */

var VOWELS = ["a", "e", "i", "o", "u"];

var reverseVowels = function (string) {
  var result = string.split("");

  var leftPointer = 0;
  var rightPointer = string.length - 1;

  while (true) {
    if (leftPointer >= rightPointer) break;

    var isLeftVowel = VOWELS.includes(string[leftPointer].toLowerCase());
    var isRightVowel = VOWELS.includes(string[rightPointer].toLowerCase());

    if (isLeftVowel && isRightVowel) {
      var savedRight = result[rightPointer];
      result[rightPointer] = result[leftPointer];
      result[leftPointer] = savedRight;

      leftPointer += 1;
      rightPointer -= 1;
    }

    if (!isLeftVowel) leftPointer += 1;

    if (!isRightVowel) rightPointer -= 1;
  }

  return result.join("");
};

var r1 = reverseVowels("hello");
var r2 = reverseVowels("leetcode");

console.log(r1, r1 == "holle");
console.log(r2, r2 == "leotcede");
