// For testing arrays:
const Array = require("./Array")

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

test("testing array", ()=> {
    expect(Array(shoppingList)).toContain("milk");
});

  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });