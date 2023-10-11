var RecentCounter = function () {
  this.history = [];
};

/**
 * @param {number} time
 * @return {number}
 */
RecentCounter.prototype.ping = function (time) {
  this.history.push(time);
  var minTime = time - 3000;
  var counter = 0;

  for (var i = this.history.length - 1; i >= 0; i--) {
    if (this.history[i] < minTime) break;
    counter++;
  }

  this.history = this.history.slice(this.history.length - counter);

  console.log(counter);
  return counter;
};

var counter = new RecentCounter();
counter.ping(1); // requests = [1], range is [-2999,1], return 1
counter.ping(100); // requests = [1, 100], range is [-2900,100], return 2
counter.ping(3001); // requests = [1, 100, 3001], range is [1,3001], return 3
counter.ping(3002); // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
