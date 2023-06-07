import Image from "next/image";

import "./Footer.scss";
import { ContactInfoIcon, ContactLinkIcon } from "@/app/types/types";
import ContactLink from "@/app/footer/ContactLink/ContactLink";
import ContactInfo from "@/app/footer/ContactInfo/ContactInfo";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__start">
          <ul>
            <ContactInfo
              icon={ContactInfoIcon.OpenHours}
              text="9:30 AM - 11:00 PM"
            />
            <ContactInfo
              icon={ContactInfoIcon.Location}
              link="https://www.google.com/maps/place/415+Malvern+Rd,+South+Yarra+VIC+3141/@-37.847552,144.9982913,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad6682bc2a6c7e5:0xc4c65535b7b886cb!8m2!3d-37.847552!4d145.00048"
              text="415 Malvern Road South Yarra, Melbourne"
            />
            <ContactInfo
              icon={ContactInfoIcon.Phone}
              link="tel:+61888888888"
              text="+61 888-888-888"
            />
            <ContactInfo
              icon={ContactInfoIcon.Email}
              link="mailto: abc@example.com"
              text="PizzaTime@mail.com"
            />
          </ul>
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
            {Object.keys(ContactLinkIcon).map((key) => (
              <li key={key}>
                <ContactLink icon={key as ContactLinkIcon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p>copyright &copy;2021 | PizzaTime.</p>
      </div>
    </footer>
  );
};
