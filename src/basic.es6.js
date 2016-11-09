'use strict';

require('babel-polyfill');

let str = 'console';
if (str) {
  let str = 'browser';
  document.write(`Hello, ${str}!`);
}
console.log(`Hello, ${str}!`);

import * as math from './lib/math.es6.js';
console.log('2π = ' + math.sum(math.pi, math.pi));
