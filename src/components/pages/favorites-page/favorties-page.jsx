import React, {useEffect} from "react";
import {AppRoute} from "../../../const";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import FavoritesList from "../../ui/favorites/favorites-list/favorites-list";
import AppTypes from "../../../types/types";

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
          <FavoritesList offerData={offerData} />
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  offerData: state.offers,
  authorizationStatus: state.authorizationStatus,
});

FavoritesPage.propTypes = {
  offerData: AppTypes.offerData,
  authorizationStatus: AppTypes.anyFlag,
};

export {FavoritesPage};

export default connect(mapStateToProps)(FavoritesPage);
