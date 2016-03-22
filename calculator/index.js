'use strict';

module.exports = function Calculator() {
  var Calc = {};

  Calc.add = function (str) {
    var regexp = /[\n,]+/;

    if (str[0] === "/") {
      var i = 0;
      var delimeter = "";
      while(str[i] !== "\n") {
        i++;
      }

      for (var ind = 2; ind < i; ind++) {
        delimeter = delimeter + str[ind];
      }

      if (delimeter !== "") {
        regexp = new RegExp(delimeter);
      }
    }

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
