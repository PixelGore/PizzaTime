"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

import {
  getCart,
  getCartCount,
  getSubTotal,
} from "../Redux/Selectors/cartSelector";
import { getAuthMe } from "../Redux/Selectors/authSelector";
import styles from "./header.module.scss";
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
    <div className={styles.header_wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__body}>
            <Link
              href="/"
              className={styles.header__logo}
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
              className={
                isOpenBrg
                  ? `${styles.header__burger} ${styles.active}`
                  : styles.header__burger
              }
              onClick={() => {
                setIsOpenBrg(!isOpenBrg);
                setIsOpenCart(false);
              }}
            >
              <span className={styles.burger_middle}></span>
            </div>
            {/* End Burger */}
            {/* Menu Start */}
            <nav className={styles.header__menu}>
              <ul className={styles.header__list}>
                <li>
                  <Link
                    href="/home"
                    className={`${styles.header__link} ${
                      pathname === "/home" ? styles.isActive : ""
                    }`}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className={styles["header__link-text"]}>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${styles.header__link} ${
                      pathname === "/about" ? styles.isActive : ""
                    }`}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className={styles["header__link-text"]}>
                      About us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className={`${styles.header__link} ${
                      pathname === "/" ? styles.isActive : ""
                    }`}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className={styles["header__link-text"]}>Menu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className={`${styles.header__link} ${
                      pathname === "/contacts" ? styles.isActive : ""
                    }`}
                    onClick={() => {
                      setIsOpenBrg(false);
                      setIsOpenCart(false);
                    }}
                  >
                    <span className={styles["header__link-text"]}>
                      Contacts
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End Menu */}
            <div className={styles.header__end}>
              <div className={styles.header__login}>
                <Link
                  href="/login"
                  className={styles["header__login-link"]}
                  onClick={() => {
                    setIsOpenBrg(false);
                    setIsOpenCart(false);
                  }}
                >
                  <span className={styles["login-text"]}>
                    {Me.length > 0 ? (
                      <AccountCircleIcon className={styles["material-icons"]} />
                    ) : (
                      <LoginIcon className={styles["material-icons"]} />
                    )}
                  </span>
                </Link>
              </div>
              <div
                className={styles.header__cart}
                onClick={() => {
                  setIsOpenCart(!isOpenCart);
                  setIsOpenBrg(false);
                }}
              >
                <span className={styles["cart-text"]} data-before={cartCount}>
                  <ShoppingCartIcon className={styles["material-icons"]} />
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
