/**
 * Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.
 */

const Calculator = function() {
    this.evaluate = string => {
      // do code here
      string = string.split(" ")
      
    }
  };


  describe('Example', () => {
	it('Tests', () => {
		var calculate = new Calculator()
		Test.assertApproxEquals(calculate.evaluate('127'), 127);
		Test.assertApproxEquals(calculate.evaluate('2 + 3'), 5);
		Test.assertApproxEquals(calculate.evaluate('2 - 3 - 4'), -5);
		Test.assertApproxEquals(calculate.evaluate('10 * 5 / 2'), 25);
	});
});