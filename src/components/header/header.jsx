import React from "react";
import "./Header.css";
import { BaseInteractiveElement } from "../common/BaseInteractiveElement";
import avatarIcon from "../../assets/images/avatar__small.png";
import mailIcon from "../../assets/images/mail-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Логотип</div>
      <nav className="header__nav">
        <BaseInteractiveElement className="header__nav-item">Снять</BaseInteractiveElement>
        <BaseInteractiveElement className="header__nav-item">Сдать</BaseInteractiveElement>
        <BaseInteractiveElement className="header__nav-item">Избранное</BaseInteractiveElement>
        <BaseInteractiveElement className="header__nav-item">Личный кабинет</BaseInteractiveElement>
      </nav>
      <div className="header__actions"> 
        <div className="header__icon">
          <img src={mailIcon} alt="mail-icon" />
        </div>
        <div className="header__icon">
          <img src={avatarIcon} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

