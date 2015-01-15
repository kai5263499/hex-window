var bignum = require('bignum');

var HexWindow = function(start,res) {
  
  var base = bignum(start,16);
  var resolution = bignum(res, 16);
  var startLen = start.length;

  var upper = start;
  var lower;

  this.narrow = function() {
    var a = resolution.toString(16).split('');
    a.pop();
    var rStr = '0'+a.join('');

    resolution = bignum(rStr,16);
  };

  this.widen = function() {
    resolution = resolution.mul(16);
  };

  var fixPadding = function() {
    if(upper.length < startLen) {
      upper = Array(startLen-upper.length+1).join('0')+upper;
    }

    if(lower.length < startLen) {
      lower = Array(startLen-lower.length+1).join('0')+lower;
    }
  };

  var dec = function() {
    upper = (base).toString(16);
    base  = base.sub(resolution);
    lower = (base).toString(16);
  };

  this.back = function(steps) {
    if(!steps) {
      steps = 1;
    }

    for(;steps--;) {
        dec();
    }

    fixPadding();

    return {"upper":upper,"lower":lower};
  };

  var inc = function() {
    upper = (base).toString(16);
    base  = base.add(resolution);
    lower = (base).toString(16);
  };

  this.next = function(steps) {
    if(!steps) {
      steps = 1;
    }

    for(;steps--;) {
      inc();
    }

    fixPadding();

    return {"upper":upper,"lower":lower};
  };
};

module.exports = HexWindow;