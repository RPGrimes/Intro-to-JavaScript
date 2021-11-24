const ShoppingBasket = require('./shoppingBasket.js');

describe("shoppingBasket", () => {
  const shoppingBasket = new ShoppingBasket;
  const name = { name: () => 'Mars' }
  const price = { price: () => 4.99 } 
  const candyDouble = { name:'Mars', price: 4.99 }

  it('creates a new shopping basket', () => {
    expect(shoppingBasket.basket).toEqual([])
  });
  
  it("has a total price of 0 upon creating the shopping basket", () => {
    expect(shoppingBasket.totalPrice).toBe(0)
  });

  it("adds a new candy to the shopping basket", () => {
    shoppingBasket.addItem(candyDouble)
    expect(shoppingBasket.basket).toEqual(['Mars'])
  });

  it("adds a new candy's value to the shopping basket total", () => {
    expect(shoppingBasket.totalPrice).toBe(4.99)
  });
});