import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import FavoritesPage from "../favorites-page/favorties-page";
import RoomPage from "../room-page/room-page";
import NotFoundPage from "../not-found-page/not-found-page";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
        <Route path={AppRoute.LOGIN} element={<SignInPage />} />
        <Route path={AppRoute.FAVORITES} element={<FavoritesPage />} />
        <Route path={AppRoute.PROPERTIES} element={<RoomPage />} />
        <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
