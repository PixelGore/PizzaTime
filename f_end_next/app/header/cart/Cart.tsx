"use client";

import { RefObject, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartCount } from "@/app/Redux/Selectors/cartSelector";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartModal } from "./CartModal/CartModal";
import useTagBlur from "@/app/hooks/useTagBlur";
import { actions as cartActions } from "@/app/Redux/Reducers/cartReducer";
import { getCartFromLocalStorage } from "@/app/local-storage-api/api-helpers";

function Cart() {
  const dispatch = useDispatch();
  const cartCount = useSelector(getCartCount);
  useEffect(() => {
    if (!cartCount) {
      const cart = getCartFromLocalStorage();

      if (cart) dispatch(cartActions.initializeCartAC(cart));
    }
  }, [cartCount, dispatch]);

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

export default Cart;
