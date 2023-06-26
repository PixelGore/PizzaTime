import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";

import "./Menu.scss";
import cn from "classnames";

type MenuProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
export const Menu: FC<MenuProps> = ({ isActive, setIsActive }) => {
  const pathname = usePathname();
  return (
    <nav className={cn("mobile-menu", { active: isActive })}>
      <div className="blur" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            href="/home"
            className={cn("nav-link", { isActive: pathname === "/home" })}
            onClick={() => setIsActive(!isActive)}
          >
            <HomeIcon className={"material-icons"} />
            Home
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link
            href="/about"
            className={cn("nav-link", { isActive: pathname === "/about" })}
            onClick={() => setIsActive(!isActive)}
          >
            <GroupsIcon className={"material-icons"} />
            About us
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link
            href="/menu"
            className={cn("nav-link", { isActive: pathname === "/menu" })}
            onClick={() => setIsActive(!isActive)}
          >
            <LocalDiningIcon className={"material-icons"} />
            Menu
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link
            href="/contacts"
            className={cn("nav-link", { isActive: pathname === "/contacts" })}
            onClick={() => setIsActive(!isActive)}
          >
            <ContactsIcon className={"material-icons"} />
            Contacts
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link
            href="/login"
            className={cn("nav-link", { isActive: pathname === "/login" })}
            onClick={() => setIsActive(!isActive)}
          >
            <LoginIcon className={"material-icons"} />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
