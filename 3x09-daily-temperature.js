// 24-10-2023
// https://leetcode.com/problems/daily-temperatures

// NOTE: 13 times more performent than the most straightforward solution but still beats only 30% of users

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // we assume that days will never get warmer ;D
  var closedDays = new Array(temperatures.length).fill(-1);
  var openedDays = [];

  for (var i = 0; i < temperatures.length; i++) {
    var currTemp = temperatures[i];

    for (var lastOpenDay = openedDays.pop(); !!lastOpenDay; lastOpenDay = openedDays.pop()) {
      var [index, prevTemp] = lastOpenDay;
      if (prevTemp >= currTemp) {
        openedDays.push(lastOpenDay);
        break;
      }

      closedDays[index] = i;
    }

    openedDays.push([i, currTemp]);
  }

  return closedDays.map((closedAt, currIndex) => (closedAt == -1 ? 0 : closedAt - currIndex));
};

console.log(dailyTemperatures([99, 73, 74, 75, 71, 69, 72, 76, 73]));
