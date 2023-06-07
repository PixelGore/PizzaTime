import Link from "next/link";
import Image from "next/image";

import "./Header.scss";
import AccountIcon from "@/app/header/AccountIcon/AccountIcon";
import BurgerMenu from "@/app/header/BurgerMenu/BurgerMenu";
import Navbar from "@/app/header/Navbar/Navbar";
import Cart from "@/app/header/Cart/Cart";

export const Header = () => {
  return (
    <div className="header_wrapper">
      <header className="header">
        <div className="container">
          <div className="header__body">
            <Link href="/" className="header__logo">
              <Image
                src="assets/common/logo.svg"
                alt="Header__logo"
                width={400}
                height={400}
              />
            </Link>
            <BurgerMenu />
            <Navbar />
            <div className="header__end">
              <div className="header__login">
                <Link href="/login" className="header__login-link">
                  <AccountIcon />
                </Link>
              </div>
              <Cart />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
