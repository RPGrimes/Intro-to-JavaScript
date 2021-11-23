const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("it returns the number entered", () => {
    expect(fizzbuzz(17)).toBe(17);
  });

  it("it returns Fizz if the number is divisible by 3", () => {
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  it("it returns Buzz if the number is divisible by 5", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  it("it returns FizzBuzz if the number is divisible by 3 & 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});
