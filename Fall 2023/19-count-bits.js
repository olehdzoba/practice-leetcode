// 19-10-2023
// https://leetcode.com/problems/counting-bits/

// NOTE: Can be improved a lot in performance. This approach is the slowest possible.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  var ans = [0];
  for (var i = 1; i <= n; i++) {
    ans.push(i.toString(2).match(/1/g).length);
  }
  return ans;
};

console.log(countBits(0));
console.log(countBits(1));
console.log(countBits(2));
console.log(countBits(5));
