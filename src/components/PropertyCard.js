import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

export default function PropertyCard(props) {
  const { title, type, city, bedrooms, bathrooms, price, email } = props;

  return (
    <div className="property-card">
      {title}
      <br />
      {type} - {city}
      <br />
      {Number(bedrooms)}
      <br />
      {Number(bathrooms)}
      <br />
      {Number(price)} bells
      <br />
      {email}
      <br />
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  price: PropTypes.number,
  email: PropTypes.string.isRequired,
};

PropertyCard.defaultProps = {
  bedrooms: 0,
  bathrooms: 0,
  price: 0,
};
