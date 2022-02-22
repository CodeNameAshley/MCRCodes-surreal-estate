import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

test("should have a class name called 'property-card'", () => {
  const component = render(<PropertyCard />);

  expect(component).toHaveClass("property-card");
});
