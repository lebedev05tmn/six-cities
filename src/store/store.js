import {createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {createAPI} from "../api";

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

export default store;
