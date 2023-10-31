// 31-10-2023
// https://leetcode.com/problems/online-stock-span/

// Note: writing this in a rush so the most straightforward solution goes first.
// I might improve performance later (this on beats only 15%).

var StockSpanner = function () {
  this.stocks = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.stocks.push(price);

  var span = 0;
  for (var i = this.stocks.length - 1; i >= 0; i--) {
    if (this.stocks[i] <= price) span += 1;
    else break;
  }

  return span;
};

var stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80); // return 1
stockSpanner.next(60); // return 1
stockSpanner.next(70); // return 2
stockSpanner.next(60); // return 1
stockSpanner.next(75); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85); // return 6

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
