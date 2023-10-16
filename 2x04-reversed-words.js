// 21-09-2023

/**
 * @param {string} string
 * @return {string}
 */
var reverseWords = function (string) {
  var result = string.split(" ").filter((chunk) => chunk.length > 0);
  result.reverse();
  return result.join(" ");
};

console.log(reverseWords("the sky is blue"), reverseWords("the sky is blue") == "blue is sky the");
console.log(reverseWords("  hello world  "), reverseWords("  hello world  ") == "world hello");
console.log(reverseWords("a good   example"), reverseWords("a good   example") == "example good a");
