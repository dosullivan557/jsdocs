// Strict typing with `    "js/ts.implicitProjectConfig.checkJs":true` in settings.json

const { add, divide, modulus, multiply, subtract } = require("./calculator");

/**
 * @file index.js is the root file for this example app
 * @author Danny O'Sullivan
 * @see <a href="https://test.com" >Test</a>
 * @
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";
/**
 * Student Name
 * @type {number}
 */
// const studentAge='12';
const studentAge = 12;

/** Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.3, 100, 12];

/**
 * Todo Object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: "hello world",
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a pound sign
 */
const calculateTax = (amount, tax) => {
  return `£${amount + tax * amount}`;
};

console.log(calculateTax(100, 0.1));

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student Id
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student age ( optional )
 * @property {string} [gender] - Student Gender ( optional )
 * @property {boolean} isActive - Student is active
 *
 */

/**
 * @type {Student}
 */

const student = {
  id: 1,
  name: "John Doe",
  age: 24,
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {string|number} age Persons age
     */
    this.age = personInfo.age;
  }
  /**
   * @property {function} greet A greeting with name and age
   * @returns void
   */
  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * Instance of Person - See {@link Person}
 */
const Person1 = new Person({ name: "Danny", age: 24 });
Person1.greet();

console.log(add(1, 2));
console.log(divide(10, 2));
console.log(modulus(6, 5));
console.log(multiply(6, 5));
console.log(subtract(6, 5));


