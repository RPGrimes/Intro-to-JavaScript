const Candy = require("./candy.js");

class ShoppingBasket{
  constructor() {
    this.basket = []
    this.totalPrice = 0
  }

  getTotalPrice() {
   return this.totalPrice
  }

  addItem(candy) {
    this.basket.push(candy.name)
    this.totalPrice += candy.price
  }
}

module.exports = ShoppingBasket
