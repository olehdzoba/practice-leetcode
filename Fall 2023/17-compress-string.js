// 17-10-2023
// https://leetcode.com/problems/string-compression/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // forces to combine sequence (if any)
  chars.push("");

  var index = 0; // start index of last sequence
  var prev = chars[0]; // previous character
  var count = 1; // number of characters in sequence

  // pointer indicates character that is being compared
  for (var pointer = 1; pointer < chars.length; pointer++) {
    var char = chars[pointer];

    if (prev == char) {
      count += 1;
    } else {
      // combine sequence
      var replacement = (prev + (count == 1 ? "" : count)).split("");
      chars.splice(index, count, ...replacement);
      pointer = index + replacement.length;

      prev = char;
      count = 1;
      index = pointer;
    }
  }

  // removes empty string that was previously added
  chars.pop();
};

// var compress = function (chars) {
//   var compressed = [["", 0]];
//   for (var char of chars) {
//     var [last, count] = compressed[compressed.length - 1];
//     if (char == last) {
//       compressed[compressed.length - 1][1] = count + 1;
//     } else {
//       compressed.push([char, 1]);
//     }
//   }

//   compressed = compressed.slice(1).reduce((result, pair) => {
//     var [char, count] = pair;
//     return count == 1 ? result + char : result + char + count;
//   }, "");

//   chars.length = 0;
//   chars.push(...compressed.split(""));

//   console.log(compressed);
//   return compressed.length;
// };
//
compress(["a", "b", "b"]);
compress(["a", "a", "a"]);
// compress(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]); // [6, ["a","2","b","2","c","3"]]
compress(["a", "a", "b", "b", "c", "c", "c"]); // [6, ["a","2","b","2","c","3"]]
// compress(["a"]); // [1, ["a"]]
// compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]); // [4, ["a","b","1","2"]]
