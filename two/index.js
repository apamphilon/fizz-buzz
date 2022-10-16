/* eslint-disable no-console */
function fizzBuzz(iterationCount = 100) {
  for (let i = 1; i <= iterationCount; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz();

// eslint-disable-next-line import/prefer-default-export
export { fizzBuzz };
