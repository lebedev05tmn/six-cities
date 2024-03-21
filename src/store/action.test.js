import {
  changeCity,
  hoverCard,
  openOptions,
  fillOffers,
  fillOffer,
  changeFilter,
  fillNearbies,
  fillComments,
  fillFavorites,
  resetRoomStatus,
  changeStatus,
  inputEmail,
  inputPassword,
  inputComment,
  inputRating,
} from "./action";

import {ActionType} from "./action";
import {AppCities} from "../const";

describe(`Action creators`, () => {
  it(`should create an action to change city`, () => {
    const city = AppCities.PARIS;
    const expectedAction = {
      type: ActionType.INTERFACE.CHANGE_CITY,
      payload: city,
    };
    expect(changeCity(city)).toEqual(expectedAction);
  });

  it(`should create an action to hover card`, () => {
    const id = 1;
    const expectedAction = {
      type: ActionType.INTERFACE.HOVER_CARD,
      payload: id,
    };
    expect(hoverCard(id)).toEqual(expectedAction);
  });

  it(`should create an action to open options`, () => {
    const expectedAction = {
      type: ActionType.INTERFACE.OPEN_OPTIONS,
    };
    expect(openOptions()).toEqual(expectedAction);
  });

  it(`should create an action to fill offers`, () => {
    const offersData = [{id: 1, name: `Offer 1`}];
    const expectedAction = {
      type: ActionType.DATA.FILL_OFFERS,
      payload: offersData,
    };
    expect(fillOffers(offersData)).toEqual(expectedAction);
  });

  it(`should create an action to fill offer`, () => {
    const offerData = {id: 1, name: `Offer 1`};
    const expectedAction = {
      type: ActionType.DATA.FILL_OFFER,
      payload: offerData,
    };
    expect(fillOffer(offerData)).toEqual(expectedAction);
  });

  it(`should create an action to change filter`, () => {
    const filter = {price: 100};
    const expectedAction = {
      type: ActionType.DATA.CHANGE_FILTER,
      payload: filter,
    };
    expect(changeFilter(filter)).toEqual(expectedAction);
  });

  it(`should create an action to fill nearbies`, () => {
    const nearby = [{id: 1, name: `Nearby 1`}];
    const expectedAction = {
      type: ActionType.DATA.FILL_NEARBIES,
      payload: nearby,
    };
    expect(fillNearbies(nearby)).toEqual(expectedAction);
  });

  it(`should create an action to fill comments`, () => {
    const comments = [{id: 1, text: `Comment 1`}];
    const expectedAction = {
      type: ActionType.DATA.FILL_COMMENTS,
      payload: comments,
    };
    expect(fillComments(comments)).toEqual(expectedAction);
  });

  it(`should create an action to fill favorites`, () => {
    const favorites = [{id: 1, name: `Favorite 1`}];
    const expectedAction = {
      type: ActionType.DATA.FILL_FAVORITES,
      payload: favorites,
    };
    expect(fillFavorites(favorites)).toEqual(expectedAction);
  });

  it(`should create an action to reset rom status`, () => {
    const expectedAction = {
      type: ActionType.DATA.RESET_ROOM_STATUS,
    };
    expect(resetRoomStatus()).toEqual(expectedAction);
  });

  it(`should create an action to change status`, () => {
    const expectedAction = {
      type: ActionType.LOGIN.CHANGE_STATUS,
    };
    expect(changeStatus()).toEqual(expectedAction);
  });

  it(`should create an action to input email`, () => {
    const email = `test@example.com`;
    const expectedAction = {
      type: ActionType.POST.INPUT_EMAIL,
      payload: email,
    };
    expect(inputEmail(email)).toEqual(expectedAction);
  });

  it(`should create an action to input password`, () => {
    const password = `password123`;
    const expectedAction = {
      type: ActionType.POST.INPUT_PASSWORD,
      payload: password,
    };
    expect(inputPassword(password)).toEqual(expectedAction);
  });

  it(`should create an action to input comment`, () => {
    const comment = `This is a comment`;
    const expectedAction = {
      type: ActionType.POST.INPUT_COMMENT,
      payload: comment,
    };
    expect(inputComment(comment)).toEqual(expectedAction);
  });

  it(`should create an action to input rating`, () => {
    const rating = 5;
    const expectedAction = {
      type: ActionType.POST.INPUT_RATING,
      payload: rating,
    };
    expect(inputRating(rating)).toEqual(expectedAction);
  });
});
