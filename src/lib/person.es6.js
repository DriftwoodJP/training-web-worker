'use strict';

/**
 * lib/person description.
 * @author DriftwoodJP
 * @version 1.0.0
 */

/**
 * Class Person
 */
export class Person {
  /**
   * @param {string} name 名前
   * @param {number} age 年齢
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  /**
   * Get the age value.
   * @return {number} The age value.
   */
  getAge() {
    return this.age;
  }
}
