var assert        = require("assert");
var should        = require("should");
var HexWindow     = require("../index.js");

describe('basic hex-window instance', function () {
 it('should initialize properly', function (done) {
    var hexwindow = new HexWindow("ffffffffffffffffffffffffffffffff","10000000000000000000000000000000");
    (typeof hexwindow).should.equal('object');
    (typeof hexwindow.back).should.equal('function');
    (typeof hexwindow.next).should.equal('function');
    (typeof hexwindow.narrow).should.equal('function');
    (typeof hexwindow.widen).should.equal('function');
    done();
 });
 it('should decrement properly', function (done) {
    var hexwindow = new HexWindow("ffffffffffffffffffffffffffffffff","10000000000000000000000000000000");

    var results = hexwindow.back();
    results.upper.should.equal("ffffffffffffffffffffffffffffffff");
    results.lower.should.equal("efffffffffffffffffffffffffffffff");

    results = hexwindow.back(2);
    results.upper.should.equal("dfffffffffffffffffffffffffffffff");
    results.lower.should.equal("cfffffffffffffffffffffffffffffff");

    done();
 });
 it('should increment properly', function (done) {
    var hexwindow = new HexWindow("00000000000000000000000000000000","10000000000000000000000000000000");

    var results = hexwindow.next();

    results.upper.should.equal("00000000000000000000000000000000");
    results.lower.should.equal("10000000000000000000000000000000");

    results = hexwindow.next(2);
    results.upper.should.equal("20000000000000000000000000000000");
    results.lower.should.equal("30000000000000000000000000000000");

    done();
 });
 it('should decrease resolution properly', function (done) {
    var hexwindow = new HexWindow("f0000000000000000000000000000000","01000000000000000000000000000000");

    hexwindow.widen();

    var results = hexwindow.back();
    results.upper.should.equal("f0000000000000000000000000000000");
    results.lower.should.equal("e0000000000000000000000000000000");

    done();
 });
 it('should increase resolution properly', function (done) {
    var hexwindow = new HexWindow("0e000000000000000000000000000000","10000000000000000000000000000000");

    hexwindow.narrow();

    var results = hexwindow.back();
    results.upper.should.equal("0e000000000000000000000000000000");
    results.lower.should.equal("0d000000000000000000000000000000");

    done();
 });
});