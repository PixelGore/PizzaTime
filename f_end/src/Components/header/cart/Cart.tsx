import { NavLink } from "react-router-dom"
import "./Cart.scss"

export const Cart = () => {
    return (
        <div className="cart-container">
            <span className="cart-title">Your Cart</span>
            <hr />
            <div className="cart-item">
                <img src="#" alt="product" />
                <div className="cart-item__info">
                    <h3 className="item__title">Rancho</h3>
                    <h5 className="item__description">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <div className="item__pricing">
                        <span className="quantity">
                            <span className="material-icons">remove</span>
                            <span className="item-qty">1</span>
                            <span className="material-icons">add</span>
                        </span>
                        <span className="price">
                            <span className="material-icons">close</span>
                            <span className="item-price">$12</span>
                        </span>
                    </div>
                </div>
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