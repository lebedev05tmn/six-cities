import {loginReducer} from "./login-reducer";
import {changeStatus, ActionType} from "../action";

describe(`Login Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(loginReducer(undefined, {})).toEqual({
      authorizationStatus: false,
    });
  });

  it(`Reducer should change status of login`, () => {
    const state = {
      authorizationStatus: false,
    };
    expect(loginReducer(state, changeStatus())).toEqual({
      authorizationStatus: true,
    });
    const changeStatusAction = {
      type: ActionType.LOGIN.CHANGE_STATUS,
    };

    expect(loginReducer(state, changeStatusAction)).toEqual({
      authorizationStatus: true,
    });
  });
});
