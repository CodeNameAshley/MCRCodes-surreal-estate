import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

// make a test block
// render a component we want to test
// find elements we want to interact with
// interact with those elements
// assert that the results are as expected

test("should have a class name called 'property-card'", () => {
  const { container } = render(<PropertyCard />);

  expect(container.firstChild).toHaveClass("property-card");
});

describe("PropertyCard", () => {
  it("renders correctly", () => {
    const propertyInfo = {
      title: "Rosewood",
      type: "cottage",
      city: "Breezy Hollow",
      bedrooms: "3",
      bathrooms: "2",
      price: "1000",
      email: "ash@acnh.com",
    };
    const { asFragment } = render(
      <PropertyCard
        title={propertyInfo.title}
        type={propertyInfo.type}
        city={propertyInfo.city}
        bedrooms={propertyInfo.bedrooms}
        bathrooms={propertyInfo.bathrooms}
        price={propertyInfo.price}
        email={propertyInfo.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
