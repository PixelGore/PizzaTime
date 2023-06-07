"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import {
  getCart,
  getGrandTotal,
  getisFetching,
  getShippingPrice,
  getSubTotal,
} from "../../Redux/Selectors/cartSelector";
import { Cart } from "./Cart/Cart";
import "./Checkout.scss";
import { CheckoutForm } from "./Form/CheckoutForm";

export default function Checkout() {
  let cartItems = useSelector(getCart);
  let cartTotal = useSelector(getSubTotal);
  let grandTotal = useSelector(getGrandTotal);
  let isFetching = useSelector(getisFetching);
  let shippingPrice = useSelector(getShippingPrice).toFixed(2);
  const router = useRouter();

  if (cartItems.length <= 0) {
    router.push("/home");
  }

  return (
    <div className="checkout-container">
      <h1 className="text">Checkout</h1>
      <div className="ordering-form">
        <Cart
          cartItems={cartItems}
          cartTotal={cartTotal}
          grandTotal={grandTotal}
          shippingPrice={shippingPrice}
        />
        <CheckoutForm
          total={grandTotal}
          items={cartItems}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
}
