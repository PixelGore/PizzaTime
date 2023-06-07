"use client";
import { RefObject, useState } from "react";
import { Menu } from "@/app/header/BurgerMenu/Menu/Menu";
import useTagBlur from "@/app/hooks/useTagBlur";
import "../Header.scss";
import cn from "classnames";

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useTagBlur(
    isMenuOpen,
    setIsMenuOpen
  ) as RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className='-order-1'>
      <button
        className={cn("header__burger", { active: isMenuOpen })}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <div>
          <span className="burger_middle"></span>
        </div>
      </button>
      <Menu isActive={isMenuOpen} setIsActive={setIsMenuOpen} />
    </div>
  );
}
