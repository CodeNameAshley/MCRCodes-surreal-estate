import React, { useState } from "react";
import "../styles/AddProperty.css";

export default function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [type, setType] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleAddType = (event) => {
    event.preventDefault();
    console.log(type);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleTypeChange = (event) =>
    setType({ ...type, [event.target.name]: event.target.value });

  return (
    <div className="AddProperty">
      Add property page
      <form className="city-form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester"> Manchester </option>
            <option value="Leeds"> Leeds </option>
            <option value="Sheffield"> Sheffield </option>
            <option value="Liverpool"> Liverpool </option>
          </select>
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
      </form>
      <form className="property-type-form" onSubmit={handleAddType}>
        <label htmlFor="title">
          <select
            id="type"
            name="type"
            value={type.type}
            onChange={handleTypeChange}
          >
            <option value="Flat"> Flat </option>
            <option value="Semi-Detached"> Semi-Detached </option>
            <option value="Terraced"> Terraced </option>
            <option value="End of Terrace"> End of Terrace </option>
            <option value="Cottage"> Cottage </option>
            <option value="Bungalow"> Bungalow </option>
          </select>
          <input
            type="text"
            id="title"
            name="title"
            value={type.title}
            onChange={handleTypeChange}
          />
        </label>
        <button type="button" id="button" aria-label="submit button">
          Search
        </button>
      </form>
    </div>
  );
}
