const ShoppingBasket = require('./shoppingbasket.js');
const Candy = require('./candy.js');

describe("shoppingBasket", () => {
  const shoppingBasket = new ShoppingBasket
  const candy = new Candy('Mars', 4.99)

  it('creates a new shopping basket', () => {
    expect(shoppingBasket.basket).toEqual([])
  });
  
  it("has a total price of 0 upon creating the shopping basket", () => {
    expect(shoppingBasket.totalPrice).toBe(0)
  });

  it("adds a new candy to the shopping basket", () => {
    shoppingBasket.addItem(candy)
    expect(shoppingBasket.basket).toEqual(['Mars'])
  });

  it("adds a new candy's value to the shopping basket total", () => {
   
    expect(shoppingBasket.totalPrice).toBe(4.99)
  });
});