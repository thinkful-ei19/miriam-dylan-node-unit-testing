// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe.only('fizzBuzzer', function() {

  // test the normal case
  it('should perform fizzBuzzer (%3,%5,%15)', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 16, expected: 16},
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', '1'];

    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});