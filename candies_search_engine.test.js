const searchCandies = require("./candies_search_engine.js");

describe("searchCandies", () => {
  it("returns Maltesers and Mars", () => {
    expect(searchCandies("Ma", 10)).toEqual(['Maltesers', 'Mars'])
  })

  it("returns Mars only", () => {
    expect(searchCandies("Ma", 2)).toEqual(['Mars'])
  })
  
  it("returns Skitties, Skittles and Starburst", () => {
    expect(searchCandies("S", 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
  })

  it("returns Skitties and Skittles", () => {
    expect(searchCandies("S", 4)).toEqual(['Skitties', 'Skittles'])
  })
})