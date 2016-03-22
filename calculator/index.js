'use strict';

module.exports = function Calculator() {
  var Calc = {};

  Calc.add = function (str) {
    var regexp = /[\n,]+/;
    var delimiter =  str.split(/\n/)[0].split(/\/\//)[1];
    if (delimiter)
      regexp = new RegExp(delimiter);
    var strArray = str.split(regexp);
    var numbers = [];

    strArray.forEach(function (item) {
      if (item === "" || item === "//" || item === "\n") {
        numbers.push(0);
        return;
      }

      numbers.push(parseInt(item));
    });

    var result = numbers.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
    });

    return result;
  }

  return Calc;
}
