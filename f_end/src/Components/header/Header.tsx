import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/common/logo.svg";
import { useState } from "react";
import { Menu } from "./menu/Menu";
import { Cart } from "./cart/Cart";
import { useSelector } from "react-redux";
import {
  getCart,
  getCartCount,
  getSubTotal,
} from "../../Redux/Selectors/cartSelector";
import { getAuthMe } from "../../Redux/Selectors/authSelector";
import { CustomNavLink } from "../common/customNavLink/CustomNavLink";

export const Header: React.FC = () => {
  const [isOpenBrg, setisOpenBrg] = useState(false);
  const [isOpenCart, setisOpenCart] = useState(false);
  let cartItems = useSelector(getCart);
  let cartCount = useSelector(getCartCount);
  let subTotal = useSelector(getSubTotal);
  const Me = useSelector(getAuthMe);

  return (
    <div className="header_wrapper">
      <header className="header">
        <div className="container">
          <div className="header__body">
            <NavLink
              to="/"
              className="header__logo"
              onClick={() => {
                setisOpenBrg(false);
                setisOpenCart(false);
              }}
            >
              <img src={logo} alt="Header__logo" />
            </NavLink>
            {/* Burger */}
            <div
              className={isOpenBrg ? "header__burger active" : "header__burger"}
              onClick={() => {
                setisOpenBrg(!isOpenBrg);
                setisOpenCart(false);
              }}
            >
              <span className="burger_middle"></span>
            </div>
            {/* End Burger */}
            {/* Menu Start */}
            <nav className="header__menu">
              <ul className="header__list">
                <li>
                  <CustomNavLink
                    to="/home"
                    className="header__link"
                    activeClassName="isActive"
                    onClick={() => {
                      setisOpenBrg(false);
                      setisOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">Home</span>
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink
                    to="/about"
                    className="header__link"
                    activeClassName="isActive"
                    onClick={() => {
                      setisOpenBrg(false);
                      setisOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">About us</span>
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink
                    to="/menu"
                    className="header__link"
                    activeClassName="isActive"
                    onClick={() => {
                      setisOpenBrg(false);
                      setisOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">Menu</span>
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink
                    to="/contacts"
                    className="header__link"
                    activeClassName="isActive"
                    onClick={() => {
                      setisOpenBrg(false);
                      setisOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">Contacts</span>
                  </CustomNavLink>
                </li>
              </ul>
            </nav>
            {/* End Menu */}
            <div className="header__end">
              <div className="header__login">
                <NavLink
                  to="/login"
                  className="header__login-link"
                  onClick={() => {
                    setisOpenBrg(false);
                    setisOpenCart(false);
                  }}
                >
                  <span className="login-text">
                    <span className="material-icons">
                      {Me.length > 0 ? "account_circle" : "login"}
                    </span>
                  </span>
                </NavLink>
              </div>
              <div
                className="header__cart"
                onClick={() => {
                  setisOpenCart(!isOpenCart);
                  setisOpenBrg(false);
                }}
              >
                <span className="cart-text" data-before={cartCount}>
                  <span className="material-icons">shopping_cart</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isActive={isOpenBrg} setIsActive={setisOpenBrg} />
      <Cart
        cartItems={cartItems}
        isActive={isOpenCart}
        setisOpenCart={setisOpenCart}
        subTotal={subTotal}
      />
    </div>
  );
};
