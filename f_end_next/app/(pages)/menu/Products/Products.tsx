"use client";

import { Product } from "@/app/(pages)/menu/Products/Product/Product";
import "../Menu.scss";
import { MenuType, ProductsType } from "@/app/types/types";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "@/app/Redux/Selectors/menuSelector";
import { useEffect } from "react";
import { requestMenu } from "@/app/Redux/Reducers/menuReducer";
import { AddToCart } from "@/app/Redux/Reducers/cartReducer";

export default function Products() {
  const menu: MenuType[] = useSelector(getMenu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMenu() as any);
  }, [dispatch]);

  const handleAddToCart = (product: ProductsType) => {
    dispatch(AddToCart(product) as any);
  };

  return (
    <>
      {menu.map((item) => (
        <div key={item.id}>
          <div className="menu-category">
            <span className="category__title">{item.name}</span>
            <a href="/" className="menu-category__link">
              Go to {item.name}
            </a>
          </div>
          <hr />
          <div className="menu-items">
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
    </>
  );
}
