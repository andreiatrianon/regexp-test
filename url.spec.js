const mocha = require("mocha");
const chai = require("chai");
const url = require("./url");
const expect = chai.expect;

describe("url", function() {
  describe("#findURLsInText", function() {
    describe("when there is no url in the text", function() {
      it("should return an empty array", function() {

        expect(url.findURLsInText("oi tudo bem?")).to.be.an('array');
        expect(url.findURLsInText("oi tudo bem?")).to.be.empty;

      });
    })

    describe("when there is one url in the text", function() {

      describe("and it has HTTPS", function() {
        it("should return the url in an array", function() {

          expect(url.findURLsInText("oi https://www.google.com tudo bem?")).to.deep.equal(['https://www.google.com']);;

        });
      });

      describe("and it has HTTP", function() {
        it("should return the url in an array", function() {

          expect(url.findURLsInText("oi http://www.google.com tudo bem?")).to.deep.equal(['http://www.google.com']);;
       
        });
      });

      describe("and it has www", function() {
        it("should return the url in an array", function() {

          expect(url.findURLsInText("oi www.google.com tudo bem?")).to.deep.equal(['www.google.com']);;
        
        });
      });

      describe("and it only the domain", function() {
        it("should return the url in an array", function() {

          expect(url.findURLsInText("oi google.com tudo bem?")).to.deep.equal(['google.com']);

        });
      });
    })

    describe("when there are three urls in the text", function() {
      it("should return the urls in an array", function() {

        expect(url.findURLsInText("oi google.com.br www.laboratoria.la https://ibmec.com.br tudo bem?")).to.deep.equal(['google.com.br', 'www.laboratoria.la', 'https://ibmec.com.br']);
        
      });
    })
  });
});