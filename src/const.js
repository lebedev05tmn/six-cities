const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites/`,
  PROPERTIES: `/offer/`,
  NOT_FOUND: `*`,
};

const AppFilters = {
  POPULAR: `Popular`,
  LOW_PRICE: `Price: low to high`,
  HIGH_PRICE: `Price: high to low`,
  RATING: `Top rated first`,
};

const city = [52.38333, 4.9];
const zoom = 12;

export {AppRoute, city, zoom, AppFilters};
