import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SendIcon from "@mui/icons-material/Send";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import { ProductsType } from "@/app/types/types";
import { AddToCart, RemoveFromCart } from "../../Redux/Reducers/cartReducer";
import "./Cart.scss";
import { CartItem } from "./CartItem/CartItem";
import cn from "classnames";

export const Cart: FC<CartType> = ({
  cartItems,
  isActive,
  setIsOpenCart,
  subTotal,
}) => {
  const dispatch = useDispatch();

  const handleQuantity = (product: ProductsType) => {
    dispatch(AddToCart(product) as any);
  };
  let rmItem = (product: ProductsType) => {
    product.quantity = 0;
    dispatch(RemoveFromCart(product) as any);
  };

  return (
    <div className={cn("cart-container", { active: isActive })}>
      <div className="cart-title">
        <span>Your Cart</span>
        <ArrowRightAltIcon
          className="material-icons"
          onClick={() => setIsOpenCart(false)}
        />
      </div>

      <hr />
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h4>Your cart looks so empty 😅</h4>
          <div className="redirect-container">
            <span className="redirect-text">
              Let me help you by showing you our menu !
            </span>
            <Link href="/menu" className="redirect-link">
              <div className="redirect-btn">
                To Menu
                <SendIcon className="material-icons" />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-Items">
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleQuantity={handleQuantity}
              rmItem={rmItem}
            />
          ))}
        </div>
      )}

      <hr />
      <div className="cart-total">
        <span className="text">Subtotal</span>
        <span className="price">${subTotal}</span>
      </div>
      <div className="cart-description">
        <h5>FREE DOMESTIC SHIPPING OVER $50</h5>
      </div>
      {cartItems.length === 0 ? null : (
        <div className="cart-checkout">
          <Link href="/checkout">
            <div className="cart-button" onClick={() => setIsOpenCart(false)}>
              <span>Check out</span>
              <TrendingFlatIcon className="material-icons" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
type CartType = {
  cartItems: ProductsType[];
  subTotal: number;
  isActive: boolean;
  setIsOpenCart: Dispatch<SetStateAction<boolean>>;
};
