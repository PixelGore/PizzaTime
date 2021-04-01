import { NavLink } from "react-router-dom";
import "./Header.scss";
import "../../App.scss";
import logo from "../../assets/common/logo.svg";
import { useState } from "react";
import { Menu } from "./menu/Menu";

export const Header: React.FC = (props: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__body">
            <NavLink to="/" className="header__logo">
              <img src={logo} alt="Header__logo" />
            </NavLink>
            {/* Burger */}
            <div
              className={isActive ? "header__burger active" : "header__burger"}
              onClick={() => setIsActive(!isActive)}
            >
              <span className="burger_middle"></span>
            </div>
            {/* End Burger */}
            {/* Menu Start */}
            <nav className="header__menu">
              <ul className="header__list">
                <li>
                  <NavLink
                    to="/home"
                    className="header__link"
                    activeClassName="isActive"
                  >
                    <span className="header__link-text">Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="header__link"
                    activeClassName="isActive"
                  >
                    <span className="header__link-text">About us</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className="header__link"
                    activeClassName="isActive"
                  >
                    <span className="header__link-text">Menu</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacts"
                    className="header__link"
                    activeClassName="isActive"
                  >
                    <span className="header__link-text">Contacts</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* End Menu */}
            <div className="header__end">
              <div className="header__login">
                <NavLink to="/" className="header__login-link">
                  <span className="login-text">
                    <span className="material-icons">login</span>
                  </span>
                </NavLink>
              </div>
              <div className="header__cart">
                <NavLink to="#" className="header__cart-link">
                  <span className="cart-text" data-before="3">
                    <span className="material-icons">shopping_cart</span>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};
