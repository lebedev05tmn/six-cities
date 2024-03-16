export const ActionType = {
  CHANGE_CITY: `change-city`,
  ADD_OFFERS: `add-offers`,
  HOVER_CARD: `hover-card`,
  OPEN_OPTIONS: `open-options`,
  CHANGE_FILTER: `change-filter`,
  FILTER_OFFERS: `filter-offers`,
  FILL_NEARBIES: `fill-nearbies`,
  FILL_COMMENTS: `fill-comments`,
  CHANGE_STATUS: `change-status`,
  INPUT_EMAIL: `input-email`,
  INPUT_PASSWORD: `input-password`,
  INPUT_COMMENT: `input-comment`,
  INPUT_RATING: `input-rating`,
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
  fillNearbies: (nearby) => ({
    type: ActionType.FILL_NEARBIES,
    payload: nearby,
  }),
  fillComments: (comments) => ({
    type: ActionType.FILL_COMMENTS,
    payload: comments,
  }),
  changeStatus: () => ({
    type: ActionType.CHANGE_STATUS,
  }),
  inputEmail: (email) => ({
    type: ActionType.INPUT_EMAIL,
    payload: email,
  }),
  inputPassword: (password) => ({
    type: ActionType.INPUT_PASSWORD,
    payload: password,
  }),
  inputComment: (comment) => ({
    type: ActionType.INPUT_COMMENT,
    payload: comment,
  }),
  inputRating: (rating) => ({
    type: ActionType.INPUT_RATING,
    payload: rating,
  }),
};
