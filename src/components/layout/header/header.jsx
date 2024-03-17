import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";
import {connect} from "react-redux";
import AppTypes from "../../../types/types";

const Header = (props) => {
  const {authorizationStatus} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.ROOT}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.FAVORITES}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {authorizationStatus
                      ? `Oliver.conner@gmail.com`
                      : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({LOGIN}) => ({
  authorizationStatus: LOGIN.authorizationStatus,
});

Header.propTypes = {
  authorizationStatus: AppTypes.anyFlag,
};

export {Header};
export default connect(mapStateToProps)(Header);
