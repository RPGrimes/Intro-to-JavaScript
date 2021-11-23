const Candy = require("./candy.js");

describe("candy", () => {
  it('names the new candy', () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe('Mars')
  });

  it('prices the new candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99)
  }
)});
