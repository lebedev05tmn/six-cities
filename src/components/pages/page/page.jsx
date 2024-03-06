import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer/footer";
const Page = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
