import {ActionType} from "../action";
import {postReducer} from "./post-reducer";

describe("postReducer", () => {
  const initialState = {
    email: "",
    password: "",
    comment: "",
    rating: 0,
  };

  it("should return initial state", () => {
    expect(postReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle INPUT_EMAIL action", () => {
    const email = "test@example.com";
    const action = {type: ActionType.POST.INPUT_EMAIL, payload: email};
    const expectedState = {...initialState, email};
    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle INPUT_PASSWORD action", () => {
    const password = "password123";
    const action = {type: ActionType.POST.INPUT_PASSWORD, payload: password};
    const expectedState = {...initialState, password};
    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle INPUT_COMMENT action", () => {
    const comment = "This is a test comment";
    const action = {type: ActionType.POST.INPUT_COMMENT, payload: comment};
    const expectedState = {...initialState, comment};
    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle INPUT_RATING action", () => {
    const rating = 5;
    const action = {type: ActionType.POST.INPUT_RATING, payload: rating};
    const expectedState = {...initialState, rating};
    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  // Добавьте другие тесты, если у вас есть дополнительные действия или случаи использования
});
