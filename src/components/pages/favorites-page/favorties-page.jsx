import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";
import FavoritesLocation from "../../ui/favorites/favorites-location/favorites-location";
import PropTypes from "prop-types";
import Footer from "../../layout/footer/footer";

const FavoritesPage = (props) => {
  useEffect(() => {
    document.title = `6 cities: favorites`;
  });
  const {offerData} = props;
  let index = 1;

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesLocation
              locationData={offerData}
              key={`amsterdam-${index++}`}
            />
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesPage.propTypes = {
  offerData: PropTypes.array,
};

export default FavoritesPage;
