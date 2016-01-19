var range = require('./range');

module.exports = function (length) {
  return range(length).reduce(function (prev, curr) {
    prev[curr] = curr;
    return prev
  }, {});
};
