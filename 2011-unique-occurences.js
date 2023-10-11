/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  var hashmap = {};
  for (var num of arr) {
    if (hashmap[num]) hashmap[num] += 1;
    else hashmap[num] = 1;
  }

  var occurences = Object.values(hashmap);
  var appeared = [];

  for (var num of occurences) {
    if (appeared.includes(num)) return false;
    else appeared.push(num);
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]) == true);
console.log(uniqueOccurrences([1, 2]) == false);
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) == true);
