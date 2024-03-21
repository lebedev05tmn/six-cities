import React from "react";
import {render} from "@testing-library/react";
import MainEmpty from "./main-empty";

test(`Should Main Empty renders correctly`, () => {
  const {container} = render(<MainEmpty />);
  expect(container).toMatchSnapshot();
});
