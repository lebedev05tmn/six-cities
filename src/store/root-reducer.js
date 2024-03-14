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
        offers: [...state.offers, action.payload],
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
        offers: filterOffers(initialState.offers, action.payload),
        openOptions: false,
        filterName: action.payload,
      };
    default:
      return state;
  }
};

export {rootReducer};
