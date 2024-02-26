import React from "react";
import HomePage from "../home/home";
import PropTypes from "prop-types";

const App = (props) => {
  const {lengthOfList} = props;
  return <HomePage lengthOfList={lengthOfList} />;
};

App.propTypes = {
  lengthOfList: PropTypes.number.isRequired,
};

export default App;
