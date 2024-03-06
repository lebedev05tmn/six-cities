import initialState from "../initialState";
import actionTypes from "../actions/action";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return {...state};
    case actionTypes.FILL_OFFERS:
      return [{...city}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
    default:
      return state;
  }
};

export default rootReducer;
