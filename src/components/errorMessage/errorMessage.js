import React from "react";

import "./errorMessage.css";

const ErrorMessage = () => {
  return (
    <>
      <img
        className="error-img"
        src={process.env.PUBLIC_URL + "/img/error.jpg"}
        alt="error"
      />
      <span>Something goes wrong!</span>
    </>
  );
};

export default ErrorMessage;
