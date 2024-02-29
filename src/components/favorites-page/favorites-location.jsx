import React from "react";
import PropTypes from "prop-types";
import FavoritesPlaceCard from "./favorites-place-card";

const FavoritesLocation = (props) => {
  const {locationData, locationName} = props;
  let index = 1;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{locationName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {locationData.map((place) =>
          place.isFavorite ? (
            <FavoritesPlaceCard
              locationData={place}
              key={`${locationName}-${index++}`}
            />
          ) : null
        )}
      </div>
    </li>
  );
};

FavoritesLocation.propTypes = {
  locationData: PropTypes.arrayOf(PropTypes.object),
  locationName: PropTypes.string,
};

export default FavoritesLocation;
