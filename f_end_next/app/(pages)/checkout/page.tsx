
import { Cart } from "./Cart/Cart";
import "./Checkout.scss";
import { CheckoutForm } from "./Form/CheckoutForm";

export default function Checkout() {
  return (
    <div className="checkout-container">
      <h1 className="text">Checkout</h1>
      <div className="ordering-form">
        <Cart />
        <CheckoutForm />
      </div>
    </div>
  );
}
