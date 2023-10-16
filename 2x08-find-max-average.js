/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  var maxTotal = -Infinity;
  var currentTotal = 0;

  for (var i = 0; i < nums.length; i++) {
    currentTotal += nums[i];
    if (i >= k) currentTotal -= nums[i - k];

    if (i + 1 >= k && currentTotal > maxTotal) maxTotal = currentTotal;
  }

  return maxTotal / k;
};

console.log(findMaxAverage([-1, -12, 5, 6, -50, -3], 4));
