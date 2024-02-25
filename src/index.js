import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Setting = {
  LENGTH_OF_LIST: 5,
};

ReactDOM.render(
    <App lengthOfList={Setting.LENGTH_OF_LIST} />,
    document.getElementById(`root`)
);
