import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Footer from "./footer";

test(`Should Footer renders correctly`, () => {
  const {container} = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
