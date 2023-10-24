/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const TOP = 1;
// const rand = Math.round(Math.random() * TOP);
const rand = 1;

function guess(num) {
  if (num == rand) return 0;
  return num > rand ? -1 : 1;
}

/**
 * @param {number} top
 * @return {number}
 */
var guessNumber = function (top) {
  var lowest = 0;
  var highest = top;
  while (true) {
    var pick = lowest + Math.floor((highest - lowest) / 2);
    var result = guess(pick);

    if (result == 0) return pick;

    if (result == -1) {
      highest = pick;
    } else {
      lowest = pick;
    }
  }
};

console.log("secret: ", rand);
console.log("guess: ", guessNumber(TOP));
