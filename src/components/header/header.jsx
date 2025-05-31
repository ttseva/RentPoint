import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { BaseInteractiveElement } from "../common/BaseInteractiveElement";
import logoIcon from "../../assets/images/logo.svg";
import avatarIcon from "../../assets/images/avatar__small.png";
import textIcon from "../../assets/images/text-icon.svg";
import textIconHover from "../../assets/images/text-icon__active.svg";
import { navItems } from "../../routes/navItems";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/" aria-label="Главная страница">
          <img src={logoIcon} alt="logo" />
        </NavLink>
      </div>
      <nav className="header__nav">
        {navItems.map((item) => (
          <BaseInteractiveElement
            className={
              "header__nav-item" +
              (item.label === "Избранное" ? " header__nav-item--favorites" : "")
            }
            key={item.path}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                "header__nav-link" + (isActive ? " active" : "")
              }
            >
              {item.label}
            </NavLink>
          </BaseInteractiveElement>
        ))}
      </nav>
      <div className="header__actions">
        <div className="header__icon header__icon--text">
          <img src={textIcon} alt="text-icon" className="header__icon-default-img" />
          <img src={textIconHover} alt="text-icon-hover" className="header__icon-hover-img" />
        </div>
        <div className="header__icon">
          <img src={avatarIcon} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

