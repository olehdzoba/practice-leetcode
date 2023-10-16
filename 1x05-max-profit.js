/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (prices.length < 2) return 0;

  let best = Infinity;
  let profit = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < best) best = prices[i];
    if (prices[i] - best > profit) {
      profit = prices[i] - best;
    }
  }

  if (profit < 0) return 0;
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
