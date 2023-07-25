import {
  nav_logo,
  home,
  globe,
  archive,
  pie,
  dollar,
  database,
  arrow,
} from "../../assets/img";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        <img className="navigation__img" src={nav_logo} alt="logo" />
      </Link>
      <div className="navigation__buttons">
        <Link
          className={"button " + (activeButton === 0 ? "active" : "")}
          onClick={() => setActiveButton(0)}
          to="/"
        >
          <img src={home} />
        </Link>
        <Link
          className={"button " + (activeButton === 1 ? "active" : "")}
          to="/fact"
          onClick={() => setActiveButton(1)}
        >
          <img src={dollar} />
        </Link>
        <Link
          className={"button " + (activeButton === 2 ? "active" : "")}
          to="/dimension"
          onClick={() => setActiveButton(2)}
        >
          <img src={database} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
