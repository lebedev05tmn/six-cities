import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
const Page = ({isMain, children}) => {
  return (
    <div className={isMain ? `page page--gray page--main` : `page`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
