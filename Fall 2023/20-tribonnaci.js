// 21-10-2023

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n == 0) return 0;
  if (n < 3) return 1;
  if (n == 3) return 2;

  var a = 0,
    b = 1,
    c = 1,
    z = 2;

  for (var i = 4; i <= n; i++) {
    a = b;
    b = c;
    c = z;
    z = a + b + c;
  }

  return z;
};

console.log(tribonacci(4));
