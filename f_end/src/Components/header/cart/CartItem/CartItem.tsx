import { FC } from "react"
import { ProductsType } from "../../../../types/types"

export const CartItem: FC<cartItemType> = ({ product, handlequantity, rmItem }) => {

    let handleReduce = () => {
        product.quantity--
        handlequantity(product)
    }
    let handleIncrease = () => {
        product.quantity++;
        handlequantity(product)
    }
    let handleRemove = () => {
        product.quantity = 0;
        rmItem(product)
    }

    return (
        <div className="cart-item">
            <img src={`http://127.0.0.1:8000${product.image}`} alt="product" />
            <div className="cart-item__info">
                <h3 className="item__title">{product.name}</h3>
                <h5 className="item__description">{product.description}</h5>
                <div className="item__pricing">
                    <span className="quantity">
                        <span className="material-icons" onClick={() => handleReduce()}>remove</span>
                        <span className="item-qty">{product.quantity}</span>
                        <span className="material-icons" onClick={() => handleIncrease()}>add</span>
                    </span>
                    <span className="price">
                        <span className="material-icons" onClick={() => handleRemove()}>close</span>
                        <span className="item-price">${product.price}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
type cartItemType = {
    product: ProductsType,
    handlequantity: (product: ProductsType) => void,
    rmItem: (product: ProductsType) => void
}