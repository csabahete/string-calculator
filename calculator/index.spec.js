"use strict";

var Calculator = require('./index.js');
var expect = require('chai').expect;

describe('Calculator', function() {

  describe('#add', function() {
    describe('empty string', function() {
      it('should return 0', function() {
        var calculator = new Calculator();
        var result = calculator.add("");
        expect(result).to.equal(0);
      });
    });

    describe("one number", function() {
      it('should return the number', function() {
        var calculator = new Calculator();
        var result = calculator.add("2");
        expect(result).to.equal(2);
      });
    });

    describe('two number', function() {
      it('should return the sum of the numbers', function() {
        var calculator = new Calculator();
        var result = calculator.add("1,2");
        expect(result).to.equal(3);
      });
    });

    describe('numbers separated with newline or commas', function() {
      it('should return the sum of the numbers', function() {
        var calculator = new Calculator();
        var result = calculator.add("1,2\n3");
        expect(result).to.equal(6);
      });
    });

    describe('numbers separated with custom delimiter', function() {
      it('should return the sum of the numbers', function() {
        var calculator = new Calculator();
        var result = calculator.add("//;\n1;2;3;4");
        expect(result).to.equal(10);
      });
    });

    describe('negative numbers', function() {
      it('should throw an exception with the negative number', function() {
        var calculator = new Calculator();
        try{
          var result = calculator.add("2,-3");
        } catch (err) {
          expect(err.message).to.contain('-3');
        }
      });
    });

    describe('numbers bigger than 1000', function() {
      it('should be ignored', function() {
        var calculator = new Calculator();
        var result = calculator.add("2,1001");
        expect(result).to.equal(2);
      });
    });
  });
});
