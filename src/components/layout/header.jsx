import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="81"
              height="41"
            />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.ROOT}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
