'use strict';

var str = 'console';
if (str) {
  let str = 'browser';
  document.write(`Hello, ${str}!`);
}
console.log(`Hello, ${str}!`);

import * as math from "./math.es6";
console.log("2π = " + math.sum(math.pi, math.pi));
