/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) =>
  nums.reduce((result, current) => {
    let previous = result[result.length - 1];
    if (typeof previous != "undefined") {
      result = [...result, previous + current];
    } else {
      result = [current];
    }
    return result;
  }, []);
