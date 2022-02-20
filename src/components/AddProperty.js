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

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleAddType = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="AddProperty">
      Add property page
      <form onSubmit={handleAddProperty}>
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
            <option value="Liverpool"> Sheffield </option>
          </select>
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <button type="button" id="button" aria-label="submit button" />
      </form>
      <form>
        <label htmlFor="title">
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleAddType}
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
            value={fields.type}
            onChange={handleFieldChange}
          />
        </label>
      </form>
    </div>
  );
}
