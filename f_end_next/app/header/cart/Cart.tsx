import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SendIcon from "@mui/icons-material/Send";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import { ProductsType } from "@/app/types/types";
import { AddToCart, RemoveFromCart } from "../../Redux/Reducers/cartReducer";
import styles from "./cart.module.scss";
import { CartItem } from "./CartItem/CartItem";

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
    <div
      className={
        isActive
          ? `${styles["cart-container"]} ${styles.active}`
          : `${styles["cart-container"]}`
      }
    >
      <div className={`${styles["cart-title"]}`}>
        <span>Your Cart</span>
        <ArrowRightAltIcon
          className={`${styles["material-icons"]}`}
          onClick={() => setIsOpenCart(false)}
        />
      </div>

      <hr />
      {cartItems.length === 0 ? (
        <div className={`${styles["empty-cart"]}`}>
          <h4>Your cart looks so empty 😅</h4>
          <div className={`${styles["redirect-container"]}`}>
            <span className={`${styles["redirect-text"]}`}>
              Let me help you by showing you our menu !
            </span>
            <Link href="/menu" className={`${styles["redirect-link"]}`}>
              <div className={`${styles["redirect-btn"]}`}>
                To Menu
                <SendIcon className={`${styles["material-icons"]}`} />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className={`${styles["cart-Items"]}`}>
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
      <div className={`${styles["cart-total"]}`}>
        <span className={`${styles["text"]}`}>Subtotal</span>
        <span className={`${styles["price"]}`}>${subTotal}</span>
      </div>
      <div className={`${styles["cart-description"]}`}>
        <h5>FREE DOMESTIC SHIPPING OVER $50</h5>
      </div>
      {cartItems.length === 0 ? null : (
        <div className={`${styles["cart-checkout"]}`}>
          <Link href="/checkout">
            <div
              className={`${styles["cart-button"]}`}
              onClick={() => setIsOpenCart(false)}
            >
              <span>Check out</span>
              <TrendingFlatIcon className={`${styles["material-icons"]}`} />
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
