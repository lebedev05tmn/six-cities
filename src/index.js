import React from "react";
import ReactDOM from "react-dom";
import {StrictMode} from "react";
import App from "./components/app/app";
import {OfferData} from "./mocks/mock-data";
import store from "./store/store";
import {Provider} from "react-redux";
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App offerData={OfferData} />
    </Provider>
  </StrictMode>,
  document.getElementById(`root`)
);
