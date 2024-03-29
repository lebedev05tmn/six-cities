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

const AppCities = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

const PostStatus = {
  ADD: `Add`,
  REMOVE: `Remove`,
};

const city = [52.38333, 4.9];
const zoom = 12;

export {AppRoute, city, zoom, AppFilters, AppCities, PostStatus};
