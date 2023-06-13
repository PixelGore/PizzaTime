import { FC } from "react";
import Image from "next/image";
import { ProductsType } from "@/app/types/types";
import "./Product.scss";

export const Product: FC<propsType> = ({
  product: { image, name, description, price, quantity },
}) => {
  return (
    <div className="product">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
        className="product-img"
        alt="Product_img"
        width={1000}
        height={1000}
      />
      <div className="product-container">
        <div className="product-info">
          <div className="product-title">{name}</div>
          <div className="product-description">{description}</div>
          <div className="product-pricing">
            <span className="product-price">${price}</span>
            <span className="product-quantity">x{quantity}</span>
          </div>
        </div>
        <div className="product-line-price">
          Item Total: ${(+price * quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
type propsType = {
  product: ProductsType;
};
