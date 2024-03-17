import {interfaceReducer} from "./interface-reducer";
import {dataReducer} from "./data-reducer";
import {loginReducer} from "./login-reducer";
import {postReducer} from "./post-reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  INTERFACE: interfaceReducer,
  DATA: dataReducer,
  LOGIN: loginReducer,
  POST: postReducer,
});

export default rootReducer;
