import { useSelector } from 'react-redux'
import { getCart } from '../../Redux/Selectors/cartSelector'
import { Cart } from './Cart/Cart'
import './Checkout.scss'
import { CheckoutForm } from './Form/CheckoutForm'



export const Checkout = () => {

    let cartItems = useSelector(getCart)
    return (
        <div className="checkout-container">
            <h1 className="text">Checkout</h1>
            <div className="ordering-form">
                <Cart cartItems={cartItems} />
                <CheckoutForm items={cartItems} />
            </div>
        </div>
    )
}