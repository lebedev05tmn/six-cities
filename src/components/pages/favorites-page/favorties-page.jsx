import React, {useEffect} from "react";
import {AppCities, AppRoute} from "../../../const";
import {connect} from "react-redux";
import FavoritesLocation from "../../ui/favorites/favorites-location/favorites-location";
import {useNavigate} from "react-router-dom";

const FavoritesPage = (props) => {
  const {offerData, authorizationStatus} = props;

  const navigate = useNavigate();
  useEffect(() => {
    if (!authorizationStatus) {
      navigate(AppRoute.LOGIN);
    }
    document.title = `6 cities: favorites`;
  });

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.values(AppCities).map((appCity) => (
              <FavoritesLocation
                key={`${appCity}-favorites`}
                city={appCity}
                locationData={offerData.filter(
                  (elem) => elem.city.name === appCity
                )}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  offerData: state.offers,
  authorizationStatus: state.authorizationStatus,
});

export {FavoritesPage};

export default connect(mapStateToProps)(FavoritesPage);
