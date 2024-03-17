import {ActionType} from "../action";

const initialState = {
  authorizationStatus: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN.CHANGE_STATUS:
      return {
        ...state,
        authorizationStatus: !state.authorizationStatus,
      };
  }
  return state;
};

export {loginReducer};
