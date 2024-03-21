import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorties-page";
import RoomPage from "../pages/room-page/room-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import Page from "../ui/layout/page/page";
import LoadingScreen from "../ui/loading-screen/loading-screen";
import {AppRoute} from "../../const";
import {fetchOffersList} from "../../store/api-actions";
import {connect} from "react-redux";
import AppTypes from "../../types/types";

const App = (props) => {
  const {onLoadData, isDataLoaded} = props;
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <Page isMain={true}>
              <MainPage />
            </Page>
          }
        />
        <Route path={AppRoute.LOGIN} element={<SignInPage />} />
        <Route
          path={AppRoute.FAVORITES}
          element={
            <Page>
              <FavoritesPage />
            </Page>
          }
        />
        <Route
          path={AppRoute.PROPERTIES + `:id`}
          element={
            <Page>
              <RoomPage />
            </Page>
          }
        />
        <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = ({DATA}) => ({
  isDataLoaded: DATA.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData: () => dispatch(fetchOffersList()),
});

App.propTypes = {
  onLoadData: AppTypes.anyFunction,
  isDataLoaded: AppTypes.anyFlag,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
