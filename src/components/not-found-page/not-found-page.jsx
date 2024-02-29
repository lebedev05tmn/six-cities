import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = `6 cities: 404 page not found`;
  });

  return (
    <div
      className="not-found"
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        height: `50vh`,
        fontSize: `50px`,
      }}
    >
      <h1 className="not-found__title" style={{margin: 0}}>
        404
      </h1>
      <p className="not-found__text">Page not found</p>
      <Link className="not-found__link" to="/" style={{color: `blue`}}>
        Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
