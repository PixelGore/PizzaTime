import { FC } from "react";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "../../Menu.scss";
import { ProductsType } from "@/app/types/types";

export const Product: FC<PropsType> = ({ product, addToCart }) => {
  let handleClick = () => {
    addToCart(product);
  };

  return (
    <div className="menu-item">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
        alt="menu"
        className="menu-item__image"
        width={600}
        height={600}
      />

      <div className={"menu-item__info"}>
        <span className={"menu-item__title"}>{product.name}</span>
        <InfoIcon className="material-icons menu__info-btn" />
      </div>
      <div className="menu-item-end" onClick={() => handleClick()}>
        <span className="item__price">${product.price}</span>
        <AddShoppingCartIcon className="material-icons" />
      </div>
    </div>
  );
};
type PropsType = {
  product: ProductsType;
  addToCart: (product: ProductsType) => void;
};
