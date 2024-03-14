import {AppFilters} from "../const";

const filterOffers = (offers, filter) => {
  switch (filter) {
    case AppFilters.POPULAR:
      return [...offers];
    case AppFilters.LOW_PRICE:
      return [...offers].sort((a, b) => a.price - b.price);
    case AppFilters.HIGH_PRICE:
      return [...offers].sort((a, b) => b.price - a.price);
    case AppFilters.RATING:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return [...offers];
  }
};
export {filterOffers};
