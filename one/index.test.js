import { fizzBuzz } from './index';

/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”.
 */

test('multiples of 3 should return Fizz', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
});

test('multiples of 5 should return Buzz', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
});

test('multiples of both 3 and 5 should return FizzBuzz', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('multiples of neither 3 or 5 should return the original number', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
});
