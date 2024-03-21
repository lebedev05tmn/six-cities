import React from "react";
import {render} from "@testing-library/react";
import NotFoundPage from "./not-found-page";
import {BrowserRouter} from "react-router-dom";

it(`Should Not Found Page renders correctly`, () => {
  const {getByText} = render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
  const headerElement = getByText(`Page not found`);
  const linkElement = getByText(`Home Page`);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
