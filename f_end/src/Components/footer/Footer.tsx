import { FC } from "react";
import logo from "../../assets/common/logo.svg";
import './Footer.scss'

export const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__start">
          <div>
            <span className="material-icons">query_builder</span>
            <span>9:30 AM - 11:00 PM</span>
          </div>
          <div>
            <span className="material-icons">location_on</span>

            <a href="https://www.google.com/maps/place/415+Malvern+Rd,+South+Yarra+VIC+3141/@-37.847552,144.9982913,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad6682bc2a6c7e5:0xc4c65535b7b886cb!8m2!3d-37.847552!4d145.00048">
              415 Malvern Road South Yarra, Melbourne
            </a>
          </div>
          <div>
            <span className="material-icons">call</span>

            <a href="tel:+61888888888">+61 888-888-888</a>
          </div>
          <div>
            <span className="material-icons">email</span>
            <a href="mailto: abc@example.com">PizzaTime@mail.com</a>
          </div>
        </div>
        <div className="footer-content__end">
          <div className="logo-container">
            <img src={logo} alt="" />
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
                <i className="fa fa-facebook"></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram"></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-vk"></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-youtube"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p>copyright &copy;2021 PizzaTime.</p>
      </div>
    </footer>
  );
};
