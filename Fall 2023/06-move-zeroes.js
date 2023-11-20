// 24-09-2023

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   nums.sort((a, b) => {
//     if (a == 0) return 1;
//     if (b == 0) return -1;
//     return 0;
//   });
// };

var moveZeroes = function (nums) {
  var zeroes = [];
  nums.forEach((num, i) => {
    if (num === 0) zeroes.push(i);
  });

  zeroes.forEach((i, j) => {
    nums.splice(i - j, 1);
    nums.push(0);
  });
};

let a1 = [0, 1, 0, 3, 12];
b1 = [0];

moveZeroes(a1);
moveZeroes(b1);
console.log(a1, b1);
