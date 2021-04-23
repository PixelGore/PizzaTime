import { FC } from 'react'
import { ProductsType } from '../../../types/types'
import '../Menu.scss'

export const Product: FC<PropsType> = ({ product, addToCart }) => {
    product.quantity = 0;
    
    let handleClick = () => {
        product.quantity++
        addToCart(product)
    }

    return (
        <div className="menu-item">
            <img src={`http://127.0.0.1:8000${product.image}`} alt="menu" className="menu-item__image" />

            <div className="menu-item__info">
                <span className="menu-item__title">{product.name}</span>
                <span className="material-icons menu__info-btn">info</span>
            </div>
            <div className="menu-item-end" onClick={() => handleClick()}>
                <span className="item__price">${product.price}</span>
                <span className="material-icons">add_shopping_cart</span>
            </div>
        </div>
    )
}
type PropsType = {
    product: ProductsType,
    addToCart: (product: ProductsType) => void
}