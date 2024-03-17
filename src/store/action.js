export const ActionType = {
  INTERFACE: {
    CHANGE_CITY: "INTERFACE/change-city",
    HOVER_CARD: "INTERFACE/hover-card",
    OPEN_OPTIONS: "INTERFACE/open-options",
  },
  DATA: {
    ADD_OFFERS: "DATA/add-offers",
    FILTER_OFFERS: "DATA/filter-offers",
    FILL_NEARBIES: "DATA/fill-nearbies",
    FILL_COMMENTS: "DATA/fill-comments",
  },
  LOGIN: {
    CHANGE_STATUS: "LOGIN/change-status",
  },
  POST: {
    INPUT_EMAIL: "POST/input-email",
    INPUT_PASSWORD: "POST/input-password",
    INPUT_COMMENT: "POST/input-comment",
    INPUT_RATING: "POST/input-rating",
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

export const openOptions = (isOpened) => ({
  type: ActionType.INTERFACE.OPEN_OPTIONS,
  payload: isOpened,
});

export const addOffers = (offersData) => ({
  type: ActionType.DATA.ADD_OFFERS,
  payload: offersData,
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
