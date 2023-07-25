import {
  burger,
  logout,
  search,
  home,
  globe,
  archive,
  pie,
  dollar,
  database,
  arrow,
} from "../../assets/img";
import { useNavigate } from "react-router-dom";
import photoPng from "../../assets/img/profile-photo.png";
import { useState } from "react";

import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const fullName = "Иванов Иван";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuSwitcher = () => {
    setMenuOpened(!menuOpened);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/authorisation");
  };

  const handleSearchChange = (value) => {
    dispatch(setSearchValue(value));
  };

  return (
    <header className="header">
      {
        <>
          <div className="header__container">
            <input
              className="header__search"
              type="text"
              placeholder="Поиск..."
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <img className="header__search-icon" src={search} alt="search" />
          </div>
        </>
      }

      {menuOpened ? (
        <div className="header__menu">
          <div className="menu__buttons">
            <span
              className="menu__item active"
              onClick={() => {
                navigate("/claims");
                setMenuOpened(!menuOpened);
              }}
            >
              <img src={home} alt="" /> Home
            </span>
            <span className="menu__item">
              <img src={globe} alt="" /> Services
            </span>
            <span className="menu__item">
              <img src={archive} alt="" /> Storage
            </span>
            <span className="menu__item">
              <img src={pie} alt="" /> Charts
            </span>
            <span className="menu__item">
              <img src={dollar} alt="" /> Currency
            </span>
            <span className="menu__item">
              <img src={database} alt="" /> Base
            </span>
            <span className="menu__item">
              <img src={arrow} alt="" /> Locations
            </span>
          </div>
          <div className="menu__blur" onClick={menuSwitcher}></div>
        </div>
      ) : (
        <img
          className="header__menu-button"
          src={burger}
          onClick={menuSwitcher}
          alt="menu"
        ></img>
      )}
      {/* <img className="header__photo" src={photoPng} alt="photo" />
      <a href="#" className="header__fullname">
        {fullName}
      </a> */}
      <a className="header__logout">
        <img src={logout} alt="logout" onClick={handleLogout} />
      </a>
    </header>
  );
};
export default Header;
