import React from "react";
import {render} from "@testing-library/react";
import NotFoundPage from "./not-found-page";
import {BrowserRouter} from "react-router-dom";

test(`Should Not Found Page renders correctly`, () => {
  const {container} = render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
