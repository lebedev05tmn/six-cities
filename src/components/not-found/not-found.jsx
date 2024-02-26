import React from "react";
import {Link} from "react-router-dom";
import HomePage from "../home/home";

const NotFound = () => {
  return (
    <div
      className="not-found"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        fontSize: "30px",
      }}
    >
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Page not found</p>
      <Link className="not-found__link" to="/" style={{color: "blue"}}>
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;
