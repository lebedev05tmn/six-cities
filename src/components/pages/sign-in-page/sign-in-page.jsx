import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {inputPassword, inputEmail} from "../../../store/action";
import {login} from "../../../store/api-actions";
import AppTypes from "../../../types/types";
import LoginForm from "../../services/login-form/login-form";

const SignInPage = (props) => {
  const navigate = useNavigate();
  const {
    authorizationStatus,
    onUserLogin,
    onInputEmail,
    onInputPassword,
    email,
    password,
    city,
  } = props;

  useEffect(() => {
    if (authorizationStatus) {
      navigate(AppRoute.ROOT);
    }

    document.title = `6 citites: authorization`;
  });

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
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
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm
              onUserLogin={onUserLogin}
              onInputEmail={onInputEmail}
              onInputPassword={onInputPassword}
              email={email}
              password={password}
            />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({LOGIN, POST, INTERFACE}) => ({
  authorizationStatus: LOGIN.authorizationStatus,
  email: POST.email,
  password: POST.password,
  city: INTERFACE.city,
});

const mapDispatchToProps = (dispatch) => ({
  onUserLogin: (email, password) => dispatch(login(email, password)),
  onInputEmail: (email) => dispatch(inputEmail(email)),
  onInputPassword: (password) => dispatch(inputPassword(password)),
});

SignInPage.propTypes = {
  authorizationStatus: AppTypes.anyFlag,
  onUserLogin: AppTypes.anyFunction,
  onInputEmail: AppTypes.anyFunction,
  onInputPassword: AppTypes.anyFunction,
  email: AppTypes.anyInput,
  password: AppTypes.anyInput,
  city: AppTypes.city,
};

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
