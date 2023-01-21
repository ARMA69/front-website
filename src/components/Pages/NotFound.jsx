import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1>
      Not Found Page <br />
      <Link to="/">Go home</Link>
    </h1>
  );
};

export default NotFound;