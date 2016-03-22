'use strict';

module.exports = function Calculator() {
  var Calc = {};

  Calc.add = function (str) {
    var regexp = /[\n,]/;
    var delimiter =  str.split(/\n/)[0].split(/\/\//)[1];
    if (delimiter) {
      var delimiters = delimiter.split(/\]\[/);
      if (delimiters != '') {
        regexStr='['
        delimiters.forEach(function (item) {
          regexStr=regexStr+item.replace('[','').replace(']','')+'|';
        })
        var regexStr=regexStr+' ]';
        str=str.replace('//'+delimiter+'\n','');
        regexp = new RegExp(regexStr);
      } else {
        regexp = new RegExp(delimiter);
      }
    }
    var strArray = str.split(regexp);
    var numbers = [];
    strArray.forEach(function (item) {
      if (item === "" || item === "//" || item === "\n" || parseInt(item)>1000) {
        numbers.push(0);
        return;
      }
      if (parseInt(item)<0)
        throw new Error('negatives not allowed: '+item);
      numbers.push(parseInt(item));
    });

    var result = numbers.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
    });

    return result;
  }

  return Calc;
}
