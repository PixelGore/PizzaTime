"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cn from "classnames";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

import {
  getCart,
  getCartCount,
  getSubTotal,
} from "../Redux/Selectors/cartSelector";
import { getAuthMe } from "../Redux/Selectors/authSelector";
import "./Header.scss";
import { Menu } from "./menu/Menu";
import { Cart } from "./cart/Cart";

export const Header = () => {
  const [isOpenBrg, setIsOpenBrg] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const cartItems = useSelector(getCart);
  const cartCount = useSelector(getCartCount);
  const subTotal = useSelector(getSubTotal);
  const Me = useSelector(getAuthMe);
  const pathname = usePathname();

  return (
    <div className="header_wrapper">
      <header className="header">
        <div className="container">
          <div className="header__body">
            <Link
              href="/"
              className="header__logo"
              onClick={() => {
                setIsOpenBrg(false);
                setIsOpenCart(false);
              }}
            >
              <Image
                src="assets/common/logo.svg"
                alt="Header__logo"
                width={400}
                height={400}
              />
            </Link>
            {/* Burger */}
            <div
              className={isOpenBrg ? "header__burger active" : "header__burger"}
              onClick={() => {
                setIsOpenBrg(!isOpenBrg);
                setIsOpenCart(false);
              }}
            >
              <span className="burger_middle"></span>
            </div>
            {/* End Burger */}
            {/* Menu Start */}
            <nav className="header__menu">
              <ul className="header__list">
                <li>
                  <Link
                    href="/home"
                    className={cn("header__link", {
                      isActive: pathname === "/home",
                    })}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={cn("header__link", {
                      isActive: pathname === "/about",
                    })}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">About us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className={cn("header__link", {
                      isActive: pathname === "/menu",
                    })}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">Menu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className={cn("header__link", {
                      isActive: pathname === "/contacts",
                    })}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className="header__link-text">Contacts</span>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End Menu */}
            <div className="header__end">
              <div className="header__login">
                <Link
                  href="/login"
                  className="header__login-link"
                  onClick={() => {
                    setIsOpenBrg(false);
                    setIsOpenCart(false);
                  }}
                >
                  <span className="login-text">
                    {Me.length > 0 ? (
                      <AccountCircleIcon className="material-icons" />
                    ) : (
                      <LoginIcon className="material-icons" />
                    )}
                  </span>
                </Link>
              </div>
              <div
                className="header__cart"
                onClick={() => {
                  setIsOpenCart(!isOpenCart);
                  setIsOpenBrg(false);
                }}
              >
                <span className="cart-text" data-before={cartCount}>
                  <ShoppingCartIcon className="material-icons" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isActive={isOpenBrg} setIsActive={setIsOpenBrg} />
      <Cart
        cartItems={cartItems}
        isActive={isOpenCart}
        setIsOpenCart={setIsOpenCart}
        subTotal={subTotal}
      />
    </div>
  );
};
