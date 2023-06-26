"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

import "../../Header.scss";

type NavbarLinkProps = {
  linkName: string;
  name: string;
};

const NavbarLink: FC<NavbarLinkProps> = ({ linkName, name }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={`/${linkName}`}
        className={cn("header__link", {
          isActive: pathname === `/${linkName}`,
        })}
      >
        <span className="header__link-text">{name}</span>
      </Link>
    </li>
  );
};

export default NavbarLink;
