import { FC } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { actions } from "../../../Redux/Reducers/cartReducer"
import { ProductsType } from "../../../types/types"
import "./Cart.scss"
import { CartItem } from "./CartItem/CartItem"

export const Cart: FC<CartType> = ({ cartItems, isActive }) => {

    const dispatch = useDispatch()

    let handlequantity = (product: ProductsType) => {
        dispatch(actions.setCartAC(product))
    }
    let rmItem = (product: ProductsType,) => {
        dispatch(actions.RMCartAC(product))
    }

    return (

        <div className={isActive ? "cart-container active" : "cart-container"}>
            <span className="cart-title">Your Cart</span>
            <hr />
            {cartItems.length === 0 ?
                <div className="empty-cart">
                    <h4>Your cart looks such empty &#128517;</h4>
                    <div className="redirect-container">
                        <span className="redirect-text">
                            Let me help you by showing you our menu !
                        </span>
                        <button className="redirect-btn">
                            To Menu
                            <NavLink to="/menu">
                                <span className="material-icons">send</span>
                            </NavLink>
                        </button>
                    </div>

                </div>
                :
                <div className="cart-Items">
                    {cartItems.map(product =>
                        <CartItem key={product.id} product={product} handlequantity={handlequantity} rmItem={rmItem} />
                    )}
                </div>
            }

            <hr />
            <div className="cart-total">
                <span className="text">Subtotal</span>
                <span>$57.98</span>
            </div>
            <div className="cart-description">
                <h5>FREE DOMESTIC SHIPPING OVER $75</h5>
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
    cartItems: ProductsType[],
    isActive: boolean
}