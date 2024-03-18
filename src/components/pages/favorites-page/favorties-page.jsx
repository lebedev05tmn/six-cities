import React, {useEffect} from "react";
import {AppRoute} from "../../../const";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import FavoritesList from "../../ui/favorites/favorites-list/favorites-list";
import AppTypes from "../../../types/types";
import {getFavoriteList} from "../../../store/api-actions";
import LoadingScreen from "../../ui/loading-screen/loading-screen";

const FavoritesPage = (props) => {
  const {authorizationStatus, onLoadFavorite, isFavoritesLoaded, favorites} =
    props;

  const navigate = useNavigate();
  useEffect(() => {
    if (!authorizationStatus) {
      navigate(AppRoute.LOGIN);
    }
    document.title = `6 cities: favorites`;
  });

  useEffect(() => {
    if (!isFavoritesLoaded) {
      onLoadFavorite();
    }
  }, [isFavoritesLoaded]);
  if (!isFavoritesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offerData={favorites} />
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = ({DATA, LOGIN}) => ({
  offerData: DATA.offers,
  authorizationStatus: LOGIN.authorizationStatus,
  isFavoritesLoaded: DATA.isFavoritesLoaded,
  favorites: DATA.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorite: () => dispatch(getFavoriteList()),
});

FavoritesPage.propTypes = {
  authorizationStatus: AppTypes.anyFlag,
  onLoadFavorite: AppTypes.anyFunction,
  isFavoritesLoaded: AppTypes.anyFlag,
  favorites: AppTypes.offerData,
};

export {FavoritesPage};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
