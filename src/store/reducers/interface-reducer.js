import {ActionType} from "../action";

const initialState = {
  city: "Paris",
  hoverCardId: null,
  openOptions: false,
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
        openOptions: action.payload,
      };
  }
  return state;
};

export {interfaceReducer};
