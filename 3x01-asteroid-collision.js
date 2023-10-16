// 16-10-2023

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  for (var currIndex = 0; currIndex < asteroids.length; currIndex++) {
    var prevIndex = currIndex - 1;

    if (asteroids[currIndex] > 0) continue;
    if (prevIndex < 0 || asteroids[prevIndex] < 0) continue;

    var left = Math.abs(asteroids[prevIndex]);
    var right = Math.abs(asteroids[currIndex]);

    if (left < right) {
      asteroids.splice(prevIndex, 1);
    } else if (right < left) {
      asteroids.splice(currIndex, 1);
    } else {
      asteroids.splice(prevIndex, 2);
    }

    currIndex = 0;
  }

  console.log(asteroids);
  return asteroids;
};
