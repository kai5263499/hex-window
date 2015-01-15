hex-window
=========

This is a simple class for calculating the sliding window of a hex string.

## Installation

    npm install hex-window --save

## Usage
    var HexWindow = require("hex-window");

    // Initialize HexWindow with a starting string and a "resolution" consisting of zeros and ones only 
    // which denotes the amount to slide the window by.
    var hexwindow = new HexWindow("ffffffffffffffffffffffffffffffff","10000000000000000000000000000000");
    var results = hexwindow.back();

    // results contains {"upper":"ffffffffffffffffffffffffffffffff","lower","efffffffffffffffffffffffffffffff"}

## Additional features

You can also widen or narrow the window via the .narrow() and .widen() functions.