import "../Header.scss";
import NavbarLink from "@/app/header/Navbar/NavbarLink/NavbarLink";

export default function Navbar() {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <NavbarLink linkName="home" name="Home" />
        <NavbarLink linkName="about" name="About us" />
        <NavbarLink linkName="menu" name="Menu" />
        <NavbarLink linkName="contacts" name="Contacts" />
      </ul>
    </nav>
  );
}
