import { FC } from "react"
import { ProductsType } from "../../../../types/types"

export const CartItem: FC<cartItemType> = ({ product, handlequantity, rmItem }) => {

    let handleReduce = () => {
        product.quantity = product.quantity -2 
        handlequantity(product)
    }
    let handleIncrease = () => {
        handlequantity(product)
    }
    let handleRemove = () => {
        rmItem(product)
    }

    const shortDesc = (str:string) => {
        return str.slice(0, 50) + (str.length > 50 ? "..." : "");
    }

    return (
        <div className="cart-item">
            <img src={`http://127.0.0.1:8000${product.image}`} alt="product" />
            <div className="cart-item__info">
                <h3 className="item__title">{product.name}</h3>
                <h5 className="item__description">{shortDesc(product.description)}</h5>
                <div className="item__pricing">
                    <span className="quantity">
                        <button className="btn" disabled={product.quantity <= 1} onClick={() => handleReduce()}>
                            <span className="material-icons">remove</span>
                        </button>

                        <span className="item-qty">{product.quantity}</span>
                        <button className="btn">
                            <span className="material-icons" onClick={() => handleIncrease()}>add</span>
                        </button>
                    </span>
                    <span className="price">
                        <span className="material-icons" onClick={() => handleRemove()}>close</span>
                        <span className="item-price">${(+product.price * product.quantity).toFixed(2)}</span>
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