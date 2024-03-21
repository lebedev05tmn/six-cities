import {AppCities} from "../../const";
import {ActionType} from "../action";

const initialState = {
  city: AppCities.PARIS,
  hoverCardId: -1,
  isOpenOptions: false,
};

const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INTERFACE.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.INTERFACE.HOVER_CARD:
      return {
        ...state,
        hoverCardId: action.payload,
      };
    case ActionType.INTERFACE.OPEN_OPTIONS:
      return {
        ...state,
        isOpenOptions: !state.isOpenOptions,
      };
  }
  return state;
};

export {interfaceReducer};
