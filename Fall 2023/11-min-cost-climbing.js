// 29-09-2023

/**
 * @param {number[]} costs
 * @return {number}
 */
var minCostClimbingStairs = function (costs) {
  var minCostMinusOne = null;
  var minCostMinusTwo = null;
  var optimalCost = 0;

  if (costs.length % 2 != 0) costs.push(0);

  for (var currentFloor = 0; currentFloor < costs.length; currentFloor++) {
    var currentCost = costs[currentFloor];

    minCostMinusTwo = minCostMinusOne;
    minCostMinusOne = optimalCost;

    if (!minCostMinusTwo) optimalCost = currentCost + minCostMinusOne;

    optimalCost = Math.min(currentCost + minCostMinusTwo, currentCost + minCostMinusOne);
  }

  console.log(optimalCost);
  return optimalCost;
};

minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
