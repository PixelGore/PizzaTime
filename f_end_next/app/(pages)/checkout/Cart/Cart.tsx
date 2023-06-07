'use client'

import "./Cart.scss";
import { Product } from "./CartItem/Product";
import { useSelector } from "react-redux";
import {
  getCart,
  getGrandTotal,
  getShippingPrice,
  getSubTotal,
} from "@/app/Redux/Selectors/cartSelector";
import { useRouter } from "next/navigation";

export const Cart = () => {
  const router = useRouter();

  let cartItems = useSelector(getCart);
  let cartTotal = useSelector(getSubTotal);
  let grandTotal = useSelector(getGrandTotal);
  let shippingPrice = useSelector(getShippingPrice).toFixed(2);

  if (cartItems.length <= 0) {
    router.push("/home");
  }

  return (
    <div className="shopping-cart">
      <div className="cart">
        {cartItems.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <hr className="divider" />

      <div className="totals">
        <div className="totals-item">
          <label>Subtotal:</label>
          <div>${cartTotal}</div>
        </div>
        <div className="totals-item">
          <label>Shipping:</label>
          <div>${shippingPrice}</div>
        </div>
        <hr />
        <div className="totals-item">
          <label>Grand Total:</label>
          <div>${grandTotal}</div>
        </div>
      </div>
    </div>
  );
};
