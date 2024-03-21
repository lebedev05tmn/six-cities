import {interfaceReducer} from "./interface-reducer";
import {changeCity, hoverCard, openOptions, ActionType} from "../action";
import {AppCities} from "../../const";

describe(`Interface Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(interfaceReducer(undefined, {})).toEqual({
      city: AppCities.PARIS,
      hoverCardId: -1,
      isOpenOptions: false,
    });
  });

  it(`Reducer should change city`, () => {
    const state = {
      city: AppCities.PARIS,
      hoverCardId: -1,
      isOpenOptions: false,
    };
    const newCity = AppCities.AMSTERDAM;
    expect(interfaceReducer(state, changeCity(newCity))).toEqual({
      city: newCity,
      hoverCardId: -1,
      isOpenOptions: false,
    });
    const changeCityAction = {
      type: ActionType.INTERFACE.CHANGE_CITY,
      payload: newCity,
    };

    expect(interfaceReducer(state, changeCityAction)).toEqual({
      city: newCity,
      hoverCardId: -1,
      isOpenOptions: false,
    });
  });

  it(`Reducer should hover card`, () => {
    const state = {
      city: AppCities.PARIS,
      hoverCardId: -1,
      isOpenOptions: false,
    };
    const newHoverCardId = 1;
    expect(interfaceReducer(state, hoverCard(newHoverCardId))).toEqual({
      city: AppCities.PARIS,
      hoverCardId: newHoverCardId,
      isOpenOptions: false,
    });
    const hoverCardAction = {
      type: ActionType.INTERFACE.HOVER_CARD,
      payload: newHoverCardId,
    };

    expect(interfaceReducer(state, hoverCardAction)).toEqual({
      city: AppCities.PARIS,
      hoverCardId: newHoverCardId,
      isOpenOptions: false,
    });
  });

  it(`Reducer should open and close options`, () => {
    const state = {
      city: AppCities.PARIS,
      hoverCardId: -1,
      isOpenOptions: false,
    };
    expect(interfaceReducer(state, openOptions())).toEqual({
      city: AppCities.PARIS,
      hoverCardId: -1,
      isOpenOptions: true,
    });
    const openOptionsAction = {
      type: ActionType.INTERFACE.OPEN_OPTIONS,
    };

    expect(interfaceReducer(state, openOptionsAction)).toEqual({
      city: AppCities.PARIS,
      hoverCardId: -1,
      isOpenOptions: true,
    });
  });
});
