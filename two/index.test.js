/* eslint-disable no-console */
import { fizzBuzz } from './index';

/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”.
 */

const originalLog = console.log;

beforeEach(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = originalLog;
});

test('fizzBuzz complete', () => {
  fizzBuzz(15);
  expect(console.log).toHaveBeenCalledTimes(15);
  expect(console.log.mock.calls[0][0]).toBe(1);
  expect(console.log.mock.calls[1][0]).toBe(2);
  expect(console.log.mock.calls[2][0]).toBe('Fizz');
  expect(console.log.mock.calls[3][0]).toBe(4);
  expect(console.log.mock.calls[4][0]).toBe('Buzz');
  expect(console.log.mock.calls[5][0]).toBe('Fizz');
  expect(console.log.mock.calls[6][0]).toBe(7);
  expect(console.log.mock.calls[7][0]).toBe(8);
  expect(console.log.mock.calls[8][0]).toBe('Fizz');
  expect(console.log.mock.calls[9][0]).toBe('Buzz');
  expect(console.log.mock.calls[10][0]).toBe(11);
  expect(console.log.mock.calls[11][0]).toBe('Fizz');
  expect(console.log.mock.calls[12][0]).toBe(13);
  expect(console.log.mock.calls[13][0]).toBe(14);
  expect(console.log.mock.calls[14][0]).toBe('FizzBuzz');
});

test('multiples of 3 should log Fizz to the console', () => {
  fizzBuzz(3);
  expect(console.log).toHaveBeenCalledTimes(3);
  expect(console.log.mock.calls[2][0]).toBe('Fizz');
});

test('multiples of 5 should log Buzz to the console', () => {
  fizzBuzz(5);
  expect(console.log).toHaveBeenCalledTimes(5);
  expect(console.log.mock.calls[4][0]).toBe('Buzz');
});

test('multiples of both 3 and 5 should log FizzBuzz to the console', () => {
  fizzBuzz(15);
  expect(console.log).toHaveBeenCalledTimes(15);
  expect(console.log.mock.calls[14][0]).toBe('FizzBuzz');
});

test('multiples of neither 3 or 5 should log the original number to the console', () => {
  fizzBuzz(1);
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log.mock.calls[0][0]).toBe(1);
});
