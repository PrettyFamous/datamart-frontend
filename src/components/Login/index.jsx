import { login_logo, mail, lock } from "../../assets/img";
import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../Input";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {};

  return (
    <div className="login">
      <img className="login__logo" src={login_logo} alt="logo" />
      <form className="login__form">
        <Input
          label="e-mail"
          text="Введите e-mail"
          img={mail}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage="Wrong email or password"
        />
        <Input
          label="Пароль"
          text="Введите пароль"
          img={lock}
          onChange={(e) => setPassword(e.target.value)}
          secure
        />
        <div className="login__check">
          <input
            type="checkbox"
            className="custom-checkbox"
            id="remember-me"
          ></input>
          <label htmlFor="remember-me" className="check__text">
            Keep me logged in
          </label>
        </div>
        <button className="login__button" onClick={(e) => handleLogin(e)}>
          Войти
        </button>
        <p className="login__reginfo">
          Нет аккаунта?&nbsp;
          <Link to="/authorisation/registration">Зарегистрироваться!</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
