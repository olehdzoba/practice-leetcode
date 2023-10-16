// 04-10-2023

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  var left = 0,
    right = heights.length - 1;
  var max = 0;

  while (true) {
    var area = Math.min(heights[left], heights[right]) * (right - left);
    if (area > max) max = area;

    if (right - left == 1) break;

    if (heights[left] < heights[right]) left += 1;
    else right -= 1;
  }

  return max;
};
