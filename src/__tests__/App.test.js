import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

// create a test block
test("renders surreal estate", () => {
  // render a component we need to test
  render(<App />);

  // find elements we want to interact with
  const title = screen.getByText(/surreal estate/i);
  expect(title).toBeInTheDocument();
});
