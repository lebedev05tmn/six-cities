import React from "react";
import ReactDOM from "react-dom";
import {StrictMode} from "react";
import App from "./components/app/app";
import {OfferData} from "./mocks/mock-data";
ReactDOM.render(
  <StrictMode>
    <App offerData={OfferData} />
  </StrictMode>,
  document.getElementById(`root`)
);
