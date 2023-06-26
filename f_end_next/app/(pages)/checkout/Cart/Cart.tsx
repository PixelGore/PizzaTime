"use client";

import { useRouter } from "next/navigation";

import "./Cart.scss";
import { Product } from "./CartItem/Product";
import { useSelector } from "react-redux";
import {
  getCart,
  getGrandTotal,
  getShippingPrice,
  getSubTotal,
} from "@/app/Redux/Selectors/cartSelector";

export function Cart() {
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
          <label htmlFor="cartTotal">Subtotal:</label>
          <div id="cartTotal">${cartTotal || "0.00"}</div>
        </div>
        <div className="totals-item">
          <label htmlFor="shippingPrice">Shipping:</label>
          <div id="shippingPrice">${shippingPrice || "0.00"}</div>
        </div>
        <hr />
        <div className="totals-item">
          <label htmlFor="grandTotal">Grand Total:</label>
          <div id="grandTotal">${grandTotal || "0.00"}</div>
        </div>
      </div>
    </div>
  );
}
