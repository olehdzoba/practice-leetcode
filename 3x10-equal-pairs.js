// 25-10-2023
// https://leetcode.com/problems/equal-row-and-column-pairs

// NOTE: time complexity is O(n^2) (3*n^2 = max number of operations in worst case scenario),
// which beats ~50% of solutions (perhaps most people chose this very straightforward approach)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  var hashmap = new Map();

  // increments value at key or defaults to 0
  var touchHashmap = function (key, isRow) {
    if (hashmap.has(key)) {
      var [row, col] = hashmap.get(key);
      hashmap.set(key, isRow ? [row + 1, col] : [row, col + 1]);
    } else {
      hashmap.set(key, isRow ? [1, 0] : [0, 1]);
    }
  };

  for (var y = 0; y < grid.length; y++) {
    var row = "";
    for (var x = 0; x < grid[y].length; x++) {
      row += grid[y][x] + ",";
    }
    touchHashmap(row);
  }

  for (var x = 0; x < grid[0].length; x++) {
    var col = "";
    for (var y = 0; y < grid.length; y++) {
      col += grid[y][x] + ",";
    }
    touchHashmap(col);
  }

  var totalPairs = 0;
  for (var [row, col] of hashmap.values()) {
    totalPairs += row * col;
  }

  return totalPairs;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);

console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ])
);

console.log(
  equalPairs([
    [13, 13],
    [13, 13],
  ])
);
