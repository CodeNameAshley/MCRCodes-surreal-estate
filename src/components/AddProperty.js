import React, { useState } from "react";
import "../styles/AddProperty.css";
import axios from "axios";
import Alert from "./Alert";

export default function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddFields = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/PropertyListing", {
        title: fields.title,
        type: fields.type,
        bedrooms: Number(fields.bedrooms),
        bathrooms: Number(fields.bathrooms),
        price: Number(fields.price),
        city: fields.city,
        email: fields.email,
      })
      .then(() => {
        setAlert({
          message: "Your Property Has Been Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Attempt Failed! Please Try Again Later",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="background-image">
      <div className="blur">
        <div className="AddProperty">
          <h1 className="AddProperty-Header"> Add A Property</h1>
          <form className="property-title">
            {alert.message && (
              <Alert message={alert.message} success={alert.isSuccess} />
            )}
            <div className="input">
              <label htmlFor="title" className="input-label">
                <p> Name of Property </p>
                <input
                  className="input-field"
                  placeholder="Title"
                  type="text"
                  id="title"
                  name="title"
                  value={fields.title}
                  onChange={handleFieldChange}
                />
              </label>
            </div>

            <div>
              <label htmlFor="type" className="input-label">
                <p> Type of Property </p>
                <select
                  className="select-box"
                  placeholder="Type"
                  type="text"
                  id="type"
                  name="type"
                  value={fields.type}
                  onChange={handleFieldChange}
                  aria-label="type of property"
                >
                  <option> --Choose A Property Type-- </option>
                  <option value="Flat"> Flat </option>
                  <option value="Detached"> Detached </option>
                  <option value="Semi-Detached"> Semi-Detached </option>
                  <option value="Terraced"> Terraced </option>
                  <option value="End of Terrace"> End of Terrace </option>
                  <option value="Cottage"> Cottage </option>
                  <option value="Bungalow"> Bungalow </option>
                </select>
              </label>
            </div>

            <div className="input">
              <label htmlFor="bedrooms" className="input-label">
                <p> No of Bedrooms </p>
                <input
                  className="input-field"
                  placeholder="No of Bedrooms"
                  type="text"
                  id="bedrooms"
                  name="bedrooms"
                  value={fields.bedrooms}
                  onChange={handleFieldChange}
                />
              </label>{" "}
            </div>

            <div className="input">
              <label htmlFor="bathrooms" className="input-label">
                <p> No. of Bathrooms </p>
                <input
                  className="input-field"
                  placeholder="No of Bathrooms"
                  type="text"
                  id="bathrooms"
                  name="bathrooms"
                  value={fields.bathrooms}
                  onChange={handleFieldChange}
                />
              </label>
            </div>

            <div className="input">
              <label htmlFor="price" className="input-label">
                <p> Price </p>
                <input
                  className="input-field"
                  placeholder="Price"
                  type="text"
                  id="price"
                  name="price"
                  value={fields.price}
                  onChange={handleFieldChange}
                />
              </label>
            </div>

            <div>
              <label htmlFor="city" className="input-label">
                <p> Property Location </p>
                <select
                  className="select-box"
                  placeholder="Location"
                  type="text"
                  id="city"
                  name="city"
                  value={fields.city}
                  onChange={handleFieldChange}
                >
                  <option> --Chose a Location-- </option>
                  <option value="Bell Rock Island"> Bell Rock </option>
                  <option value="Breezy Hollow"> Breezy Hollow </option>
                  <option value="Campsite"> Campsite </option>
                  <option value="City"> City </option>
                  <option value="Main Street"> Main Street </option>
                  <option value="Posy Farm"> Posy Farm </option>
                  <option value="Saltwater Shores"> Saltwater Shores </option>
                  <option value="Sunburst Island"> Sunburst Island </option>
                  <option value="Town"> Town </option>
                </select>
              </label>
            </div>

            <div className="input">
              <label htmlFor="email" className="input-label">
                <p> Email Address </p>
                <input
                  className="input-field"
                  placeholder="Email Address"
                  type="text"
                  id="email"
                  name="email"
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </label>
            </div>
          </form>
          <br />
          <button
            className="addproperty-button"
            type="button"
            id="button"
            aria-label="submit button"
            onClick={handleAddFields}
          >
            Add My Property
          </button>
        </div>
      </div>
    </div>
  );
}
