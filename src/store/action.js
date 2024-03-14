export const ActionType = {
  CHANGE_CITY: `change-city`,
  ADD_OFFERS: `add-offers`,
  HOVER_CARD: `hover-card`,
  OPEN_OPTIONS: `open-options`,
  CHANGE_FILTER: `change-filter`,
  FILTER_OFFERS: `filter-offers`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  addOffers: (offersData) => ({
    type: ActionType.ADD_OFFERS,
    payload: offersData,
  }),
  hoverCard: (id) => ({
    type: ActionType.HOVER_CARD,
    payload: id,
  }),
  openOptions: (isOpened) => ({
    type: ActionType.OPEN_OPTIONS,
    payload: isOpened,
  }),
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filter,
  }),
};
