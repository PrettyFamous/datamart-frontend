import { Outlet } from "react-router-dom";
import { reg, footer } from "../assets/img";

import "../components/Registration/Registration.scss";
import "../components/Login/Login.scss";

const AuthorisationLayout = () => {
  return (
    <div className="content">
      <div className="main__frame">
        <div className="picture">
          <img className="picture__image" src={reg} alt="girl" />
        </div>
        <Outlet />
      </div>
      <footer className="footer">
        <img className="footer__image" src={footer} alt="logo" />
      </footer>
    </div>
  );
};

export default AuthorisationLayout;
