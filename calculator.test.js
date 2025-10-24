// calculator.test.js
const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
});

test('modulus 10 % 3 to equal 1', () => {
    expect(calculator.modulus(10, 3)).toBe(1);
});

test('throws error when modulus by zero', () => {
    expect(() => calculator.modulus(10, 0)).toThrow("Cannot modulus by zero");
});