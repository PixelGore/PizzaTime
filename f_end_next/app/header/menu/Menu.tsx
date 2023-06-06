import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";

import styles from "./menu.module.scss";

export const Menu: FC<PropsType> = ({ isActive, setIsActive }) => {
  const pathname = usePathname();
  return (
    <nav
      className={
        isActive
          ? `${styles["mobile-menu"]} ${styles.active}`
          : `${styles["mobile-menu"]}`
      }
    >
      <div className={styles.blur} />
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-item"]}>
          <Link
            href="/home"
            className={`${styles["nav-link"]} ${
              pathname === "/" ? styles.isActive : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <HomeIcon className={styles["material-icons"]} />
            Home
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            href="/about"
            className={`${styles["nav-link"]} ${
              pathname === "/" ? styles.isActive : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <GroupsIcon className={styles["material-icons"]} />
            About us
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            href="/menu"
            className={`${styles["nav-link"]} ${
              pathname === "/" ? styles.isActive : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <LocalDiningIcon className={styles["material-icons"]} />
            Menu
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            href="/contacts"
            className={`${styles["nav-link"]} ${
              pathname === "/" ? styles.isActive : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <ContactsIcon className={styles["material-icons"]} />
            Contacts
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            href="/login"
            className={`${styles["nav-link"]} ${
              pathname === "/" ? styles.isActive : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <LoginIcon className={styles["material-icons"]} />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
type PropsType = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
