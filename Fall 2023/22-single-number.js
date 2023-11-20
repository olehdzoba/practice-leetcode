// 24-10-2023
// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((bitmap, num) => bitmap ^ num);
};
