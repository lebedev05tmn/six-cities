import React from "react";
import AppTypes from "../../../types/types";

const LoginForm = ({
  onUserLogin,
  onInputEmail,
  onInputPassword,
  email,
  password,
}) => {
  return (
    <form className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required=""
          onChange={(e) => onInputEmail(e.target.value)}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required=""
          onChange={(e) => onInputPassword(e.target.value)}
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={
          !email.match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          ) || password === ``
        }
        onClick={(e) => {
          e.preventDefault();
          onUserLogin(email, password);
        }}
      >
        Sign in
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  onUserLogin: AppTypes.anyFunction,
  onInputEmail: AppTypes.anyFunction,
  onInputPassword: AppTypes.anyFunction,
  email: AppTypes.anyInput,
  password: AppTypes.anyInput,
};

export default LoginForm;
