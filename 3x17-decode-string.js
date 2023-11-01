// 01-11-2023
// https://leetcode.com/problems/decode-string/

// Note: Again this is kinda staightforward solution, first that comes to mind. I am hungry so I am going to hunt down some food.
// Now I am getting the sense of LeetCode. The point is not to complete the challenge but rather to have enough will power to improve the solution
// unless it's perfect.

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var getCompressed = function (sequence, start) {
    var openingBrackets = 0;
    var closingBrackets = 0;
    for (var end = start; end < sequence.length; end++) {
      if (sequence[end] == "[") openingBrackets += 1;
      if (sequence[end] == "]") closingBrackets += 1;
      if (openingBrackets > 0 && openingBrackets == closingBrackets) break;
    }

    var compressed = sequence.slice(start + 1, end);
    return compressed;
  };

  var decode = function (sequence, repeater) {
    sequence = sequence.repeat(+repeater);

    var decoded = "";
    var repeater = "";

    for (var i = 0; i < sequence.length; i++) {
      var char = sequence[i];
      if (char == "[") {
        var compressed = getCompressed(sequence, i);
        decoded += decode(compressed, repeater);
        repeater = "";

        i += compressed.length + 1;
        continue;
      }

      if (Number.isNaN(+char)) {
        decoded += char;
      } else {
        repeater += char;
      }
    }
    return decoded;
  };

  return decode(s, "1");
};

function testDecodeString(input, expected) {
  var result = decodeString(input);
  var valid = result === expected;
  console.log(`${input} => ${result}, valid: ${valid}`);
}

testDecodeString("3[a]2[bc]", "aaabcbc");
testDecodeString("3[a]a2[bc]", "aaaabcbc");
testDecodeString("3[hi]mom", "hihihimom");
testDecodeString("3[boba]", "bobabobaboba");
testDecodeString("1[a]", "a");
testDecodeString("2[a]", "aa");
testDecodeString("aaa2[b]", "aaabb");
testDecodeString("2[abc]3[cd]ef", "abcabccdcdcdef");
testDecodeString("3[a2[c]]", "accaccacc");
testDecodeString("2[a2[e3[bc]]]", "aebcbcbcebcbcbcaebcbcbcebcbcbc");
