import { FC } from "react";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import styles from "../Menu.scss";
import { ProductsType } from "@/app/types/types";

export const Product: FC<PropsType> = ({ product, addToCart }) => {
  let handleClick = () => {
    addToCart(product);
  };

  return (
    <div className={`${styles["Menu-item"]}`}>
      <Image
        src={`http://127.0.0.1:8000${product.image}`}
        alt="menu"
        className={`${styles["Menu-item__image"]}`}
        width={600}
        height={600}
      />

      <div className={`${styles["Menu-item__info"]}`}>
        <span className={`${styles["Menu-item__title"]}`}>{product.name}</span>
        <InfoIcon
          className={`${styles["material-icons"]} ${styles["menu__info-btn"]}`}
        />
      </div>
      <div
        className={`${styles["Menu-item-end"]}`}
        onClick={() => handleClick()}
      >
        <span className={`${styles["item__price"]}`}>${product.price}</span>
        <AddShoppingCartIcon className={`${styles["material-icons"]}`} />
      </div>
    </div>
  );
};
type PropsType = {
  product: ProductsType;
  addToCart: (product: ProductsType) => void;
};
