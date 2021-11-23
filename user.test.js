const { it, expect } = require("@jest/globals");
const User = require("./user.js");

describe("user", () => {
  it("names the new user", () => {
    const user = new User("Myoung");
    expect(user.getName()).toBe("Myoung");
  });

  it("Introduces the user", () => {
    const user = new User("Myoung");
    expect(user.getIntroduction()).toBe("Hi, my name is Myoung");
  });
});
