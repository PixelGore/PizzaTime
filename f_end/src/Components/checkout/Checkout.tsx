import { useSelector } from 'react-redux'
import { getCart, getGrandTotal, getShippingPrice, getSubTotal } from '../../Redux/Selectors/cartSelector'
import { Cart } from './Cart/Cart'
import './Checkout.scss'
import { CheckoutForm } from './Form/CheckoutForm'


export const Checkout = () => {

    let cartItems = useSelector(getCart)
    let cartTotal = useSelector(getSubTotal)
    let grandTotal = useSelector(getGrandTotal)
    let shippingPrice = useSelector(getShippingPrice).toFixed(2)

    return (
        <div className="checkout-container">
            <h1 className="text">Checkout</h1>
            <div className="ordering-form">
                <Cart cartItems={cartItems} cartTotal={cartTotal} grandTotal={grandTotal} shippingPrice={shippingPrice} />
                <CheckoutForm items={cartItems} />
            </div>
        </div>
    )
}