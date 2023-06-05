import { Dispatch, FC, SetStateAction } from "react";
import "./Menu.scss";
import { CustomNavLink } from "../../common/customNavLink/CustomNavLink";

export const Menu: FC<PropsType> = ({ isActive, setIsActive }) => {
  return (
    <nav className={isActive ? "mobile-menu active" : "mobile-menu"}>
      <div className="blur" />
      <ul className="nav-list">
        <li className="nav-item">
          <CustomNavLink
            to="/home"
            className="nav-link"
            activeClassName="isActive"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="material-icons">home</span>
            Home
          </CustomNavLink>
        </li>
        <li className="nav-item">
          <CustomNavLink
            to="/about"
            className="nav-link"
            activeClassName="isActive"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="material-icons">groups</span>
            About us
          </CustomNavLink>
        </li>
        <li className="nav-item">
          <CustomNavLink
            to="/menu"
            className="nav-link"
            activeClassName="isActive"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="material-icons">local_dining</span>
            Menu
          </CustomNavLink>
        </li>
        <li className="nav-item">
          <CustomNavLink
            to="/contacts"
            className="nav-link"
            activeClassName="isActive"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="material-icons">contacts</span>
            Contacts
          </CustomNavLink>
        </li>
        <li className="nav-item">
          <CustomNavLink
            to="/login"
            className="nav-link"
            activeClassName="isActive"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="material-icons">login</span>
            Login
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};
type PropsType = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
