import {ActionType} from "../action";

const initialState = {
  email: ``,
  password: ``,
  comment: ``,
  rating: 0,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POST.INPUT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.POST.INPUT_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case ActionType.POST.INPUT_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case ActionType.POST.INPUT_RATING:
      return {
        ...state,
        rating: action.payload,
      };
  }
  return state;
};

export {postReducer};
