// 17-09-2023

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  var divisor = 0;
  while (true) {
    divisor += 1;

    if (divisor > str1.length) return "";

    if (str1.length % divisor != 0) continue;

    var common = str1.length / divisor;

    if (str2.length % common != 0) continue;

    var slice = str1.slice(0, common);

    // to check if their common part matches original strings when repeated
    var expanded1 = slice.repeat(str1.length / common);
    var expanded2 = slice.repeat(str2.length / common);

    if (expanded1 == str1 && expanded2 == str2) return slice;
  }
};

var s1 = "TAUXXTAUXXTAUXXTAUXXTAUXX",
  s2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX",
  s3 = "ABA",
  s4 = "ABAB";

console.log(gcdOfStrings(s1, s2));
console.log(gcdOfStrings(s2, s1));
console.log(gcdOfStrings(s3, s4));
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("AA", "A"));
console.log(gcdOfStrings("AAAAAAAAA", "AAACCC"));
