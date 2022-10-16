/* eslint-disable no-console */
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
}

const numbers = Array.from(Array(100).keys(), (x) => x + 1);

const result = numbers.map((number) => {
  console.log(fizzBuzz(number));
  return fizzBuzz(number);
});

console.log(result);

// eslint-disable-next-line import/prefer-default-export
export { fizzBuzz };
