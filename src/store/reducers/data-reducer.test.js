import {ActionType} from "../action";
import {filterOffers} from "../../utils/utils";
import {AppFilters} from "../../const";
import {dataReducer} from "./data-reducer";

describe("dataReducer", () => {
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

  it("should return initial state", () => {
    expect(dataReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FILL_OFFERS action", () => {
    const action = {
      type: ActionType.DATA.FILL_OFFERS,
      payload: [{id: 1, name: "Offer 1"}],
    };
    const expectedState = {
      ...initialState,
      offers: action.payload,
      isDataLoaded: true,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FILL_OFFER action", () => {
    const offer = {id: 1, name: "Offer 1"};
    const action = {type: ActionType.DATA.FILL_OFFER, payload: offer};
    const expectedState = {
      ...initialState,
      offer,
      isOfferLoaded: true,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle RESET_ROOM_STATUS action", () => {
    const currentState = {
      ...initialState,
      isOfferLoaded: true,
      isCommentsLoaded: true,
      isNearbyLoaded: true,
    };
    const action = {type: ActionType.DATA.RESET_ROOM_STATUS};
    const expectedState = {
      ...currentState,
      isOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyLoaded: false,
    };
    expect(dataReducer(currentState, action)).toEqual(expectedState);
  });

  it("should handle CHANGE_FILTER action", () => {
    const action = {
      type: ActionType.DATA.CHANGE_FILTER,
      payload: AppFilters.NEW,
    };
    const expectedState = {
      ...initialState,
      offers: filterOffers(initialState.offers, AppFilters.NEW),
      isOpenOptions: false,
      filterName: AppFilters.NEW,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FILL_NEARBIES action", () => {
    const nearbies = [
      {id: 1, name: "Nearby 1"},
      {id: 2, name: "Nearby 2"},
    ];
    const action = {type: ActionType.DATA.FILL_NEARBIES, payload: nearbies};
    const expectedState = {
      ...initialState,
      nearbies,
      isNearbyLoaded: true,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FILL_COMMENTS action", () => {
    const comments = [
      {id: 1, text: "Comment 1"},
      {id: 2, text: "Comment 2"},
    ];
    const action = {type: ActionType.DATA.FILL_COMMENTS, payload: comments};
    const expectedState = {
      ...initialState,
      comments,
      isCommentsLoaded: true,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FILL_FAVORITES action", () => {
    const favorites = [
      {id: 1, name: "Favorite 1"},
      {id: 2, name: "Favorite 2"},
    ];
    const action = {type: ActionType.DATA.FILL_FAVORITES, payload: favorites};
    const expectedState = {
      ...initialState,
      favorites,
      isFavoritesLoaded: true,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });
});
