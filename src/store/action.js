export const ActionType = {
  INTERFACE: {
    CHANGE_CITY: `INTERFACE/change-city`,
    HOVER_CARD: `INTERFACE/hover-card`,
    OPEN_OPTIONS: `INTERFACE/open-options`,
  },
  DATA: {
    FILL_OFFERS: `DATA/fill-offers`,
    FILL_OFFER: `DATA/fill-offer`,
    FILTER_OFFERS: `DATA/filter-offers`,
    FILL_NEARBIES: `DATA/fill-nearbies`,
    FILL_COMMENTS: `DATA/fill-comments`,
    FILL_FAVORITES: `DATA/fill-favorites`,
    CHANGE_FILTER: `DATA/change-filter`,
  },
  LOGIN: {
    CHANGE_STATUS: `LOGIN/change-status`,
  },
  POST: {
    INPUT_EMAIL: `POST/input-email`,
    INPUT_PASSWORD: `POST/input-password`,
    INPUT_COMMENT: `POST/input-comment`,
    INPUT_RATING: `POST/input-rating`,
  },
};

export const changeCity = (city) => ({
  type: ActionType.INTERFACE.CHANGE_CITY,
  payload: city,
});

export const hoverCard = (id) => ({
  type: ActionType.INTERFACE.HOVER_CARD,
  payload: id,
});

export const openOptions = () => ({
  type: ActionType.INTERFACE.OPEN_OPTIONS,
});

export const fillOffers = (offersData) => ({
  type: ActionType.DATA.FILL_OFFERS,
  payload: offersData,
});

export const fillOffer = (offerData) => ({
  type: ActionType.DATA.FILL_OFFER,
  payload: offerData,
});

export const changeFilter = (filter) => ({
  type: ActionType.DATA.CHANGE_FILTER,
  payload: filter,
});

export const fillNearbies = (nearby) => ({
  type: ActionType.DATA.FILL_NEARBIES,
  payload: nearby,
});

export const fillComments = (comments) => ({
  type: ActionType.DATA.FILL_COMMENTS,
  payload: comments,
});

export const fillFavorites = (favorites) => ({
  type: ActionType.DATA.FILL_FAVORITES,
  payload: favorites,
});

export const changeStatus = () => ({
  type: ActionType.LOGIN.CHANGE_STATUS,
});

export const inputEmail = (email) => ({
  type: ActionType.POST.INPUT_EMAIL,
  payload: email,
});

export const inputPassword = (password) => ({
  type: ActionType.POST.INPUT_PASSWORD,
  payload: password,
});

export const inputComment = (comment) => ({
  type: ActionType.POST.INPUT_COMMENT,
  payload: comment,
});

export const inputRating = (rating) => ({
  type: ActionType.POST.INPUT_RATING,
  payload: rating,
});
