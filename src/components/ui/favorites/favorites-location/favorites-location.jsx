import React from "react";
import PropTypes from "prop-types";
import FavoritesPlaceCard from "../favorites-place-card/favorites-place-card";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../../const";

const FavoritesLocation = (props) => {
  const {locationData, city} = props;
  let index = 1;

  {
    return (
      Boolean(locationData.filter((elem) => elem.is_favortite).length) && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {locationData
              .filter((elem) => elem.is_favortite)
              .map((place) => (
                <FavoritesPlaceCard
                  locationData={place}
                  key={`${city}-${index++}`}
                />
              ))}
          </div>
        </li>
      )
    );
  }
};

FavoritesLocation.propTypes = {
  locationData: PropTypes.array,
};

export default FavoritesLocation;
