(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _mathEs = require('./lib/math.es6.js');

var math = _interopRequireWildcard(_mathEs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var str = 'console';
if (str) {
  var _str = 'browser';
  document.write('Hello, ' + _str + '!');
}
console.log('Hello, ' + str + '!');

console.log("2π = " + math.sum(math.pi, math.pi));

},{"./lib/math.es6.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
/**
 * lib/math description.
 */

/**
 * Adds two numbers together.
 * @param {int} x The first number.
 * @param {int} y The second number.
 * @return {int} The sum of the two numbers.
 */
function sum(x, y) {
  return x + y;
}

/**
 * 円周率
 * @type {Number}
 */
var pi = exports.pi = 3.141593;

},{}]},{},[1])
//# sourceMappingURL=basic.js.map
