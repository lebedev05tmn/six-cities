import React, {memo} from "react";
import {AppCities} from "../../../const";
import AppTypes from "../../../types/types";

const CityVariants = ({onChangeCity, city}) => {
  return (
    <ul className="locations__list tabs__list">
      {Object.values(AppCities).map((appCity) => (
        <li className="locations__item" key={appCity}>
          <a
            className={
              city === appCity
                ? `locations__item-link tabs__item tabs__item--active`
                : `locations__item-link tabs__item`
            }
            onClick={() => onChangeCity(appCity)}
          >
            <span>{appCity}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CityVariants.propTypes = {
  onChangeCity: AppTypes.anyFunction,
  city: AppTypes.city,
};

export default memo(CityVariants, (prevProps, nextProps) => {
  return prevProps.city === nextProps.city;
});
