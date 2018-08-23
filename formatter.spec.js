var mocha = require("mocha");
var chai = require("chai");
var formatter = require("./formatter");
var expect = chai.expect;

// TESTES:
// "" -> "0"
// "12" -> "12.00"
// "12.30" ->  "12.30"
// "12.999" -> "13.00"
// "12,30" ->  "12.30"
// "12,999" -> "13.00"


describe("formatter", function() {
  describe("#valueToAPIFormat", function() {
    // "" -> "0"
    describe("when there is not number in the text", function() {
      it("should return zero", function() {
        expect(formatter.valueToAPIFormat("")).to.equal('0');
      });
    })
    // "12" -> "12.00"
    describe("when there is non-decimal number in the text", function() {
      it("should return decimal number", function() {
        expect(formatter.valueToAPIFormat('12')).to.equal('12.00');
      });
    })
    // "12.30" ->  "12.30"
    describe("when there is decimal number with dot in the text", function() {
      it("should return the same number", function() {
        expect(formatter.valueToAPIFormat('12.30')).to.equal('12.30');
      });
    })
    // "12.999" -> "13.00"
    describe("when there is number with 3 decimals in the text", function() {
      it("should return number with 2 decimals", function() {
        expect(formatter.valueToAPIFormat('12.999')).to.equal('13.00');
      });
    })
    // "12,30" ->  "12.30"
    describe("when there is decimal number with comma in the text", function() {
      it("should return decimal number with dot", function() {
        expect(formatter.valueToAPIFormat('12,30')).to.equal('12.30');
      });
    })
    // "12,999" -> "13.00"
    describe("when there is number with 3 decimals and comma in the text", function() {
      it("should return number with 2 decimals and dot", function() {
        expect(formatter.valueToAPIFormat('12,999')).to.equal('13.00');
      });
    })
  });
});