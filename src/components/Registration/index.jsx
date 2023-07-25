import { login_logo, mail, lock } from "../../assets/img";
import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";

import "./Registration.scss";

const Registration = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const comparePassword = (target) => {};

  const emailError = (isError) => {};

  const handleRegistration = (e) => {};

  return (
    <div className="login">
      <img className="login__logo" src={login_logo} alt="logo" />
      <form className="login__form">
        <Input
          label="ФИО"
          text="Введите ФИО"
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="e-mail"
          text="Введите  e-mail"
          img={mail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Пароль"
          text="Введите пароль"
          img={lock}
          onChange={(e) => setPassword(e.target.value)}
          secure
        />
        <Input
          label="Подтвердите пароль"
          text="Введите пароль"
          img={lock}
          onChange={(e) => comparePassword(e.target)}
          secure
        />
        <button
          className="login__button"
          onClick={(e) => handleRegistration(e)}
        >
          Зарегистрироваться
        </button>
        <p className="login__reginfo">
          Уже есть аккаунт?&nbsp;
          <Link to="/authorisation">Войти!</Link>
        </p>
      </form>
    </div>
  );
};
export default Registration;
