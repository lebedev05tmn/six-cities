import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import AppTypes from "../../../../types/types";

const Page = ({isMain, children}) => {
  return (
    <div className={isMain ? `page page--gray page--main` : `page`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Page.propTypes = {
  isMain: AppTypes.anyFlag,
  children: AppTypes.component,
};

export default Page;
