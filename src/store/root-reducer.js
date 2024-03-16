import initialState from "./initial-state";
import {ActionType} from "./action";
import {filterOffers} from "../utils/utils";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.ADD_OFFERS:
      return {
        ...state,
        offers: [...state.offers, ...action.payload],
        isDataLoaded: true,
      };
    case ActionType.HOVER_CARD:
      return {
        ...state,
        hoverCardId: action.payload,
      };
    case ActionType.OPEN_OPTIONS:
      return {
        ...state,
        openOptions: action.payload,
      };
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        offers: filterOffers(state.offers, action.payload),
        openOptions: false,
        filterName: action.payload,
      };
    case ActionType.FILL_NEARBIES:
      return {
        ...state,
        nearbies: action.payload,
        isNearbyLoaded: true,
      };
    case ActionType.FILL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.CHANGE_STATUS:
      return {
        ...state,
        authorizationStatus: !state.authorizationStatus,
      };
    case ActionType.INPUT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.INPUT_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case ActionType.INPUT_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case ActionType.INPUT_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export {rootReducer};
