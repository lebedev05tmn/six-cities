import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../home/home";
import NotFound from "../not-found/not-found";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
