import React, { FC, useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

type CustomNavLinkProps = {
  to: string;
  activeClassName: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
};
export const CustomNavLink: FC<CustomNavLinkProps> = ({
  to,
  activeClassName,
  className,
  children,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleNavLinkClick = () => {
    setIsActive(false);
  };

  const linkClassName = cn(className, {
    [activeClassName]: isActive,
  });

  return (
    <NavLink to={to} className={linkClassName} onClick={handleNavLinkClick}>
      {children}
    </NavLink>
  );
};
