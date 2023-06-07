"use client";
import { useSelector } from "react-redux";
import { getCartCount } from "@/app/Redux/Selectors/cartSelector";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RefObject, useState } from "react";
import { CartModal } from "./CartModal/CartModal";
import useTagBlur from "@/app/hooks/useTagBlur";

export default function Cart() {
  const cartCount = useSelector(getCartCount);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const ref = useTagBlur(
    isCartOpen,
    setIsCartOpen
  ) as RefObject<HTMLDivElement>;

  return (
    <div ref={ref}>
      <button
        className="header__cart"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <span className="cart-text" data-before={cartCount}>
          <ShoppingCartIcon className="material-icons" />
        </span>
      </button>
      <CartModal isActive={isCartOpen} setIsOpenCart={setIsCartOpen} />
    </div>
  );
}
