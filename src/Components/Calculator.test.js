const mathOperations = require('./Calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });
    test('Subtracting 2 from 5 should return 3', () => {
        expect(mathOperations.diff(5, 2)).toBe(3);
      });
    test('Multiplying 3 * 2 should return 6', () => {
        expect(mathOperations.product(1, 2)).toBe(6);
      });
   })