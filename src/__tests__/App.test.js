import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

// create a test block
test("should have a class name called 'App'", () => {
  // render a component we need to test
  const { container } = render(<App />);

  // find elements we want to interact with

  // interact with those elements

  // assert that the results are as expected
  expect(container.firstChild).toHaveClass("App");
});
