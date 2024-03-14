import React from "react";
import ReactDOM from "react-dom";
import {StrictMode} from "react";
import App from "./components/app/app";
import store from "./store/store";
import {Provider} from "react-redux";
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App offerData={store.getState().offers} />
    </Provider>
  </StrictMode>,
  document.getElementById(`root`)
);
