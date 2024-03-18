import {ActionType} from "../action";
import {filterOffers} from "../../utils/utils";
import {AppFilters} from "../../const";

const initialState = {
  offers: [],
  filterName: AppFilters.POPULAR,
  isDataLoaded: false,
  nearbies: [],
  isNearbyLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  favorites: [],
  isFavoritesLoaded: false,
  offer: {},
  isOfferLoaded: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DATA.FILL_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.DATA.FILL_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true,
      };

    case ActionType.DATA.CHANGE_FILTER:
      return {
        ...state,
        offers: filterOffers(state.offers, action.payload),
        isOpenOptions: false,
        filterName: action.payload,
      };
    case ActionType.DATA.FILL_NEARBIES:
      return {
        ...state,
        nearbies: action.payload,
        isNearbyLoaded: true,
      };
    case ActionType.DATA.FILL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.DATA.FILL_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoaded: true,
      };
  }
  return state;
};

export {dataReducer};
