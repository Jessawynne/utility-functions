module.exports = function (start, stop) {
  var range = [];

  if(!stop) {
    stop = start;
    start = 0;
  }

  for (var i = 0; start < stop; start++, i++) {
   range[i] = start;
  }

  return range;
};


