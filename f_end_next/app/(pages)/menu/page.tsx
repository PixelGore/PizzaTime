"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/Reducers/cartReducer";
import { requestMenu } from "../../Redux/Reducers/menuReducer";
import { getMenu } from "../../Redux/Selectors/menuSelector";
import { MenuType, ProductsType } from "../../types/types";
import styles from "./styles.module.scss";
import { Product } from "./Product/Product";



export default function Menu() {
  const menu: MenuType[] = useSelector(getMenu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMenu() as any);
  }, [dispatch]);

  let handleAddToCart = (product: ProductsType) => {
    dispatch(AddToCart(product) as any);
  };

  return (
    <div className={`${styles["menu-content"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["menu"]}`}>
          {menu.map((item) => (
            <div key={item.id}>
              <div className={`${styles["menu-category"]}`}>
                <span className={`${styles["category__title"]}`}>
                  {item.name}
                </span>
                <a href="/" className={`${styles["menu-category__link"]}`}>
                  Go to {item.name}
                </a>
              </div>
              <hr />
              <div className={`${styles["menu-items"]}`}>
                {item.products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
