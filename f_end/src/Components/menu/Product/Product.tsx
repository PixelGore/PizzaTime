import { FC } from 'react'
import '../Menu.scss'

export const Product:FC<PropsType> = ({image, name, price}) => {
    return (
        <div className="menu-item">
            <img src={`http://127.0.0.1:8000${image}`} alt="menu" className="menu-item__image" />

            <div className="menu-item__info">
                <span className="menu-item__title">{name}</span>
                <span className="material-icons menu__info-btn">info</span>
            </div>

            <div className="menu-item-end">
                <span className="item__price">${price}</span>
                <span className="material-icons">add_shopping_cart</span>
            </div>
        </div>
    )
}
type PropsType = {
    image:string | null,
    name:string,
    price:string
}