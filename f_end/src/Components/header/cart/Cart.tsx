import { FC } from "react"
import { NavLink } from "react-router-dom"
import { ProductsType } from "../../../types/types"
import "./Cart.scss"
import { CartItem } from "./CartItem/CartItem"

export const Cart: FC<CartType> = (cartItems) => {
    return (
        <div className="cart-container">
            <span className="cart-title">Your Cart</span>
            <hr />
            <div className="cart-Items">
                {cartItems.cartItems.map(product =>
                    <CartItem key={product.id} product={product} />
                )}
            </div>

            <hr />
            <div className="cart-total">
                <span className="text">Subtotal</span>
                <span>$57.98</span>
            </div>
            <div className="cart-description">
                <h5>FREE DOMESTIC SHIPPING OVER $50</h5>
            </div>
            <div className="cart-checkout">
                <NavLink to="/checkout">
                    <div className="cart-button">
                        <span>Check out</span>
                        <span className="material-icons">trending_flat</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
type CartType = {
    cartItems: ProductsType[]
}