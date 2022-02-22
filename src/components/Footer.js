import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;

  return (
    <div className="footer">
      <div className="fake-news">
        <p>
          All Rights Reserved
          <br />
          {Date().toString()}
        </p>
      </div>
    </div>
  );
}
