import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import qs from "qs";

export default function Sidebar() {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="link-main">
      <Link to={buildQueryString("query", { city: "Bell Rock" })}>
        Bell Rock
      </Link>
      <br />
      <Link to={buildQueryString("query", { city: "Breezy Hollow" })}>
        Breezy Hollow
      </Link>
      <br />
      <Link to={buildQueryString("query", { city: "Campsite" })}>Campsite</Link>
      <br />
      <Link to={buildQueryString("query", { city: "City" })}>City</Link>
      <br />
      <Link to={buildQueryString("query", { city: "Main Street" })}>
        Main Street
      </Link>
      <br />
      <Link to={buildQueryString("query", { city: "Posy Farm" })}>
        Posy Farm
      </Link>
      <br />
      <Link to={buildQueryString("query", { city: "Saltwater Shores" })}>
        Saltwater Shores
      </Link>
      <br />
      <Link to={buildQueryString("query", { city: "Sunburst Island" })}>
        Sunburst Island
      </Link>
      <br />
      <Link to={buildQueryString("query", { city: "Town" })}>Town</Link>
      <br />
      <Link to={buildQueryString("sort", { price: +1 })}>Price Ascending</Link>
      <br />
      <Link to={buildQueryString("sort", { price: -1 })}>Price Descending</Link>
    </div>
  );
}
