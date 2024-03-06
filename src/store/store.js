import {createStore} from "redux";
import rootReducer from "./reducers/root-reducer";
import action from "./actions/action";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, action, composeWithDevTools());

export default store;
