import { Dispatch, FC, SetStateAction } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { AddToCart, RemoveFromCart } from "../../../Redux/Reducers/cartReducer"
import { ProductsType } from "../../../types/types"
import "./Cart.scss"
import { CartItem } from "./CartItem/CartItem"

export const Cart: FC<CartType> = ({ cartItems, isActive, setisOpenCart, subTotal }) => {

    const dispatch = useDispatch()

    let handlequantity = (product: ProductsType) => {
        dispatch(AddToCart(product))
    }
    let rmItem = (product: ProductsType,) => {
        dispatch(RemoveFromCart(product))
    }

    return (

        <div className={isActive ? "cart-container active" : "cart-container"}>

            <div className="cart-title">
                <span>Your Cart</span>
                <span className="material-icons" onClick={() => setisOpenCart(false)}>arrow_right_alt</span>
            </div>

            <hr />
            {cartItems.length === 0 ?
                <div className="empty-cart">
                    <h4>Your cart looks such empty 😅</h4>
                    <div className="redirect-container">
                        <span className="redirect-text">
                            Let me help you by showing you our menu !
                        </span>
                        <NavLink to="/menu" className="redirect-link">
                            <div className="redirect-btn">
                                To Menu
                                <span className="material-icons">send</span>
                            </div>
                        </NavLink>
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
                <span className="price">
                    ${subTotal}
                </span>
            </div>
            <div className="cart-description">
                <h5>FREE DOMESTIC SHIPPING OVER $50</h5>
            </div>
            {cartItems.length === 0 ? null :
                <div className="cart-checkout">
                    <NavLink to="/checkout">
                        <div className="cart-button" onClick={() => setisOpenCart(false)}>
                            <span>Check out</span>
                            <span className="material-icons">trending_flat</span>
                        </div>
                    </NavLink>
                </div>
            }
        </div>
    )
}
type CartType = {
    cartItems: ProductsType[],
    subTotal: number,
    isActive: boolean,
    setisOpenCart: Dispatch<SetStateAction<boolean>>
}