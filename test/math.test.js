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
    it('should return x + y', () => {
      const result = Math.sum(1, 2);
      assert(result === 3);
    });
    // it('arguments should be type of number', () => {
    //   try {
    //     Math.sum('String1', 'String2');
    //     throw new Error("unreachable line");
    //   } catch (error) {
    //     assert.equal(error.name, assert.AssertionError.name);
    //   }
    // });
  });
});
