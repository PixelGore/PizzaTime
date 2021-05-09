import { FC } from "react"
import { ProductsType } from "../../../../types/types"
import './Product.scss'

export const Product: FC<propsType> = ({ product }) => {
    return (
        <div className="product">
            <img src={`http://127.0.0.1:8000${product.image}`} className="product-img" alt="Product_img" />
            <div className="product-container">
                <div className="product-info">
                    <div className="product-title">{product.name}</div>
                    <div className="product-description">{product.description}</div>
                    <div className="product-pricing">
                        <span className="product-price">${product.price}</span>
                        <span className="product-quantity">x{product.quantity}</span>
                    </div>
                </div>
                <div className="product-line-price">
                    Item Total: ${(+product.price * product.quantity).toFixed(2)}
                </div>
            </div>
        </div>
    )
}
type propsType = {
    product: ProductsType
}