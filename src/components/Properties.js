import React from "react";
import houses from "../images/acnh-surreal-estate.jpg";

export default function Properties() {
  return (
    <div>
      Properties page
      <img className="surreal-estate-image" src={houses} alt="House" />
    </div>
  );
}
