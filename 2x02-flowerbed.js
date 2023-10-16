/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [...flowerbed];
  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;

    var adjacent = flowerbed[i - 1] === 1 || flowerbed[i + 1] === 1;
    console.log(adjacent);

    if (!adjacent) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  if (n <= 0) return true;
  return false;
};
