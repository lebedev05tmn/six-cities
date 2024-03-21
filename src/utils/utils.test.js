import {filterOffers, parseDate} from "./utils";
import {AppFilters} from "../const";

describe("filterOffers function", () => {
  const offers = [
    {id: 1, price: 100, rating: 4},
    {id: 2, price: 200, rating: 3},
    {id: 3, price: 150, rating: 5},
  ];

  it("should return offers sorted by id when filter is POPULAR", () => {
    const filteredOffers = filterOffers(offers, AppFilters.POPULAR);
    expect(filteredOffers).toEqual([
      {id: 1, price: 100, rating: 4},
      {id: 2, price: 200, rating: 3},
      {id: 3, price: 150, rating: 5},
    ]);
  });

  it("should return offers sorted by price in ascending order when filter is LOW_PRICE", () => {
    const filteredOffers = filterOffers(offers, AppFilters.LOW_PRICE);
    expect(filteredOffers).toEqual([
      {id: 1, price: 100, rating: 4},
      {id: 3, price: 150, rating: 5},
      {id: 2, price: 200, rating: 3},
    ]);
  });

  it("should return offers sorted by price in descending order when filter is HIGH_PRICE", () => {
    const filteredOffers = filterOffers(offers, AppFilters.HIGH_PRICE);
    expect(filteredOffers).toEqual([
      {id: 2, price: 200, rating: 3},
      {id: 3, price: 150, rating: 5},
      {id: 1, price: 100, rating: 4},
    ]);
  });

  it("should return offers sorted by rating in descending order when filter is RATING", () => {
    const filteredOffers = filterOffers(offers, AppFilters.RATING);
    expect(filteredOffers).toEqual([
      {id: 3, price: 150, rating: 5},
      {id: 1, price: 100, rating: 4},
      {id: 2, price: 200, rating: 3},
    ]);
  });

  it("should return original offers array when filter is not recognized", () => {
    const filteredOffers = filterOffers(offers, "UNKNOWN_FILTER");
    expect(filteredOffers).toEqual(offers);
  });
});

describe("parseDate function", () => {
  it('should parse date string to "dd.mm.yyyy" format', () => {
    const dateStr = "2024-03-21";
    expect(parseDate(dateStr)).toEqual("21.03.2024");
  });

  // Add more test cases for edge cases if needed
});
