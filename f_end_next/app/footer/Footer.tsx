"use client";

import Image from "next/image";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VkIcon from "@/app/common/icons/VkIcon";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__start">
          <div>
            <QueryBuilderIcon className="material-icons" />
            <span>9:30 AM - 11:00 PM</span>
          </div>
          <div>
            <LocationOnIcon className="material-icons" />

            <a href="https://www.google.com/maps/place/415+Malvern+Rd,+South+Yarra+VIC+3141/@-37.847552,144.9982913,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad6682bc2a6c7e5:0xc4c65535b7b886cb!8m2!3d-37.847552!4d145.00048">
              415 Malvern Road South Yarra, Melbourne
            </a>
          </div>
          <div>
            <CallIcon className="material-icons" />

            <a href="tel:+61888888888">+61 888-888-888</a>
          </div>
          <div>
            <EmailIcon className="material-icons" />
            <a href="mailto: abc@example.com">PizzaTime@mail.com</a>
          </div>
        </div>
        <div className="footer-content__end">
          <div className="logo-container">
            <Image
              src="/assets/common/logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint?
            Dolor molestias eveniet explicabo? Excepturi veritatis debitis
            minima aliquid maxime saepe recusandae ducimus molestias dolores.
          </p>
          <h4 className="footer-content__extended">Find more on</h4>
          <ul className="socials">
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <VkIcon className="fill-white hover:fill-cyan-400 transition-colors duration-150" />
              </a>
            </li>
            <li>
              <a href="/">
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p>copyright &copy;2021 | PizzaTime.</p>
      </div>
    </footer>
  );
};
