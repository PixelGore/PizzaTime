import { FC } from 'react'
import { ProductsType } from '../../../types/types'
import './Cart.scss'
import { Product } from './CartItem/Product'

export const Cart: FC<propsType> = ({ cartItems, cartTotal, grandTotal, shippingPrice }) => {

    return (
        <div className="shopping-cart">
            <div className="cart">
                {cartItems.map(product =>
                    <Product key={product.id} product={product} />
                )}
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
    )
}
type propsType = {
    cartItems: ProductsType[],
    cartTotal: number,
    grandTotal: number,
    shippingPrice: string
}