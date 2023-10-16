// START: Day 1 - 20/03/2023

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let left = 0;
  let right = 0;

  for (let i = 1; i < nums.length; i++) {
    right += nums[i];
  }

  if (left == right) return 0;

  for (let pivot = 1; pivot < nums.length; pivot++) {
    left += nums[pivot - 1];
    right -= nums[pivot];
    if (left == right) return pivot;
  }

  return -1;
};
