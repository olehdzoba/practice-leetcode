// 26-09-2023

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  var highestAltitude = 0;
  var currentAltitude = 0;

  for (var slope of gain) {
    currentAltitude += slope;

    if (currentAltitude > highestAltitude) {
      highestAltitude = currentAltitude;
    }
  }

  return highestAltitude;
};
