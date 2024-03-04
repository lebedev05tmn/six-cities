import React from "react";
import PropTypes from "prop-types";
import FavoritesPlaceCard from "./favorites-place-card";

const FavoritesLocation = (props) => {
  const {locationData} = props;
  let index = 1;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {locationData
          .filter((elem) => elem.isFavorite)
          .map((place) => (
            <FavoritesPlaceCard
              locationData={place}
              key={`amsterdam-${index++}`}
            />
          ))}
      </div>
    </li>
  );
};

FavoritesLocation.propTypes = {
  locationData: PropTypes.array,
};

export default FavoritesLocation;
