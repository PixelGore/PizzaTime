import { FC } from "react";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import styles from "../styles.module.scss";
import { ProductsType } from "@/app/types/types";

export const Product: FC<PropsType> = ({ product, addToCart }) => {
  let handleClick = () => {
    addToCart(product);
  };

  return (
    <div className={`${styles["menu-item"]}`}>
      <Image
        src={`http://127.0.0.1:8000${product.image}`}
        alt="menu"
        className={`${styles["menu-item__image"]}`}
        width={600}
        height={600}
      />

      <div className={`${styles["menu-item__info"]}`}>
        <span className={`${styles["menu-item__title"]}`}>{product.name}</span>
        <InfoIcon
          className={`${styles["material-icons"]} ${styles["menu__info-btn"]}`}
        />
      </div>
      <div
        className={`${styles["menu-item-end"]}`}
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
