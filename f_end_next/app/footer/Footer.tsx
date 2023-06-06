"use client";

import Image from "next/image";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-content__start"]}>
          <div>
            <QueryBuilderIcon className={styles["material-icons"]} />
            <span>9:30 AM - 11:00 PM</span>
          </div>
          <div>
            <LocationOnIcon className={styles["material-icons"]} />

            <a href="https://www.google.com/maps/place/415+Malvern+Rd,+South+Yarra+VIC+3141/@-37.847552,144.9982913,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad6682bc2a6c7e5:0xc4c65535b7b886cb!8m2!3d-37.847552!4d145.00048">
              415 Malvern Road South Yarra, Melbourne
            </a>
          </div>
          <div>
            <CallIcon className={styles["material-icons"]} />

            <a href="tel:+61888888888">+61 888-888-888</a>
          </div>
          <div>
            <EmailIcon className={styles["material-icons"]} />
            <a href="mailto: abc@example.com">PizzaTime@mail.com</a>
          </div>
        </div>
        <div className={styles["footer-content__end"]}>
          <div className={styles["logo-container"]}>
            <Image
              src="/assets/common/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint?
            Dolor molestias eveniet explicabo? Excepturi veritatis debitis
            minima aliquid maxime saepe recusandae ducimus molestias dolores.
          </p>
          <h4 className={styles["footer-content__extended"]}>Find more on</h4>
          <ul className={styles["socials"]}>
            <li>
              <a href="/">
                <i className={`${styles.fa} ${styles["fa-facebook"]}`}></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className={`${styles.fa} ${styles["fa-twitter"]}`}></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className={`${styles.fa} ${styles["fa-instagram"]}`}></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className={`${styles.fa} ${styles["fa-vk"]}`}></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className={`${styles.fa} ${styles["fa-youtube"]}`}></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-end"]}>
        <p>copyright &copy;2021 | PizzaTime.</p>
      </div>
    </footer>
  );
};
