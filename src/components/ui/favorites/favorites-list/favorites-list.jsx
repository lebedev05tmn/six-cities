import React from "react";
import {AppCities} from "../../../../const";
import FavoritesLocation from "../favorites-location/favorites-location";
import AppTypes from "../../../../types/types";

const FavoritesList = ({offerData}) => {
  return (
    <ul className="favorites__list">
      {Object.values(AppCities).map((appCity) => (
        <FavoritesLocation
          key={`${appCity}-favorites`}
          city={appCity}
          locationData={offerData.filter((elem) => elem.city.name === appCity)}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offerData: AppTypes.offerData,
};

export default FavoritesList;
