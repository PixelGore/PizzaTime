import { FC } from "react"
import { ProductsType } from "../../../../types/types"

export const CartItem: FC<cartItemType> = (product) => {
    return (
        <div className="cart-item">
            <img src={`http://127.0.0.1:8000${product.product.image}`} alt="product" />
            <div className="cart-item__info">
                <h3 className="item__title">{product.product.name}</h3>
                <h5 className="item__description">{product.product.description}</h5>
                <div className="item__pricing">
                    <span className="quantity">
                        <span className="material-icons">remove</span>
                        <span className="item-qty">1</span>
                        <span className="material-icons">add</span>
                    </span>
                    <span className="price">
                        <span className="material-icons">close</span>
                        <span className="item-price">${product.product.price}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
type cartItemType = {
    product: ProductsType
}