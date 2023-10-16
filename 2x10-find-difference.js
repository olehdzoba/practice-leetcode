// 27-09-2023

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  var hashmap = {};

  for (var num of nums1) {
    hashmap[num] = [1, 0];
  }

  for (var num of nums2) {
    if (hashmap[num]) hashmap[num] = [1, 1];
    else hashmap[num] = [0, 1];
  }

  nums1 = [];
  nums2 = [];

  for (var [num, presence] of hashmap.entries()) {
    if (presence[0] == presence[1]) continue;
    if (presence[0]) nums1.push(num);
    else nums2.push(num);
  }

  return [nums1, nums2];
};
