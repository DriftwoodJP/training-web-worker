const assert = require('assert');
import * as Math from '../src/lib/math.es6.js';
// const Math = require('../src/lib/math.es6.js');

/** @test {Math} */
describe('Math', () => {
  /** @test {pi} */
  describe('pi', () => {
    it('円周率は 3.141593 である', () => {
      assert(Math.pi === 3.141593);
    });
  });
  /** @test {sum} */
  describe('sum', () => {
    it('1 + 2 の合計は 3 である', () => {
      assert(Math.sum(1, 2) === 3);
    });
  });
});
