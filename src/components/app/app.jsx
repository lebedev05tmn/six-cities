import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import FavoritesPage from "../favorites-page/favorties-page";
import RoomPage from "../room-page/room-page";
import NotFoundPage from "../not-found-page/not-found-page";
import {AppRoute} from "../../const";

const App = (props) => {
  const {offerData} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={<MainPage offerData={offerData} />}
        />
        <Route path={AppRoute.LOGIN} element={<SignInPage />} />
        <Route
          path={AppRoute.FAVORITES}
          element={<FavoritesPage offerData={offerData} />}
        />
        <Route
          path={AppRoute.PROPERTIES + `:id`}
          element={<RoomPage offerData={offerData} />}
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
