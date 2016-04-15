const assert = require('power-assert');
import * as myClass from '../src/lib/person.es6.js';
// let myClass = require('../src/lib/person.es6.js');

/** @test {Person} */
describe('Person', () => {
  let alice = new myClass.Person('alice', 3);
  let bob = new myClass.Person('bob', 5);
  /** @test {Person#getAge} */
  it('#getAge', () => {
    assert(alice.getAge() === 3);
  });
  /** @test {Person#name} */
  it('#name', () => {
    assert(alice.name === 'alice');
  });
  /** @test {Person#mistake} */
  // failed
  it('#mistake', () => {
    assert(alice.name !== bob.name);
  });
});
