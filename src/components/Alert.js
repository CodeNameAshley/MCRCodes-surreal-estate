import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

export default function Alert({ message, success }) {
  if (!message) return null;

  return (
    <div className={`alert-${success ? "success" : "error"}`}>
      {/* <div className="Alert">{message}</div> */}
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};
