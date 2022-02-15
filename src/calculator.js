/**
 * Calculator module - See {@tutorial calculator}
 * @module Calculator
 */

/**
 * Adds two numbers
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} Sum of x and y
 */
const add = (x, y) => x + y;
/**
 * Subtracts two numbers
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} difference of x and y
 */
const subtract = (x, y) => x - y;
/**
 * Divides two numbers
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} Divison of x and y
 */
const divide = (x, y) => x / y;
/**
 * Multiplies two numbers
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} Product of x and y
 */
const multiply = (x, y) => x * y;
/**
 * Modulus of two numbers
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} Modulus of x and y
 */
const modulus = (x, y) => x % y;

module.exports = { add, subtract, divide, multiply, modulus };
