import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorties-page";
import RoomPage from "../pages/room-page/room-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import Page from "../pages/page/page";
import {AppRoute} from "../../const";

const App = (props) => {
  const {offerData} = props;
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
              <FavoritesPage offerData={offerData} />
            </Page>
          }
        />
        <Route
          path={AppRoute.PROPERTIES + `:id`}
          element={
            <Page>
              <RoomPage offerData={offerData} />
            </Page>
          }
        />
        <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  offerData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
