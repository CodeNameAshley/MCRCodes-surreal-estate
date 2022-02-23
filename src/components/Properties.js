import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import houses from "../images/acnh-banner.jpg";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/Properties.css";
import Sidebar from "./Sidebar";

export default function Properties() {
  const initialState = {
    property: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.property);

  const [alert, setAlert] = useState(initialState.alert);

  useEffect(async () => {
    await axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then((response) => {
        setProperties(response.data);
        // setAlert({
        //   message: "Check them out below",
        //   isSuccess: true,
        // });
      })
      .catch(() => {
        setAlert({
          message: "Oh no! It looks like your search failed! Try again later.",
          isSuccess: false,
        });
      });
  }, []);

  console.log(properties);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const propertiesFound = properties.length;

  const [show, setShow] = useState(false);

  const showHandler = () => setShow((currentShow) => !currentShow);

  const showFilters = "✨ Show Filters ✨";

  return (
    <div>
      <div>
        <button className="filter-button" onClick={showHandler} type="button">
          {showFilters}
        </button>
        {show ? <Sidebar /> : null}
      </div>

      <div className="image-div">
        <img className="surreal-estate-image" src={houses} alt="house" />
        <div className="properties-header">
          <h1>Wake up to a new horizon every day </h1>
          <div className="properties-description">
            Search properties for sale to find a happy home in paradise
          </div>
        </div>
      </div>

      <div className="properties-body">
        <div className="properties-found">
          {propertiesFound <= 1
            ? `Oh no! There are no properties in this area!`
            : `We found ${propertiesFound} surreal properties in this area`}
        </div>

        <div className="alert-message">
          {alert.message && (
            <Alert
              className="properties-alert"
              message={alert.message}
              success={alert.isSuccess}
            />
          )}
        </div>

        <div className="properties-item">
          {properties.map((property) => (
            <div className="properties" key={property._id}>
              <PropertyCard
                key={property._id}
                title={property.title}
                type={property.type}
                city={property.city}
                bedrooms={Number(property.bedrooms)}
                bathrooms={Number(property.bathrooms)}
                price={Number(property.price)}
                email={property.email}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
