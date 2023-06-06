import { FC } from "react";
//import next image
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { ProductsType } from "@/app/types/types";
import "../Cart.scss";

export const CartItem: FC<cartItemType> = ({
  product,
  handleQuantity,
  rmItem,
}) => {
  let handleReduce = () => {
    product.quantity = product.quantity - 2;
    handleQuantity(product);
  };
  let handleIncrease = () => {
    handleQuantity(product);
  };
  let handleRemove = () => {
    rmItem(product);
  };

  const shortDesc = (str: string) => {
    return str.slice(0, 50) + (str.length > 50 ? "..." : "");
  };

  return (
    <div className="cart-item">
      <Image
        src={`http://127.0.0.1:8000${product.image}`}
        alt="product"
        width={300}
        height={300}
      />
      <div className="cart-item__info">
        <h3 className="item__title">{product.name}</h3>
        <h5 className="item__description">{shortDesc(product.description)}</h5>
        <div className="item__pricing">
          <span className="quantity">
            <button
              className="btn"
              disabled={product.quantity <= 1}
              onClick={() => handleReduce()}
            >
              <RemoveIcon className="material-icons" />
            </button>

            <span className="item-qty">{product.quantity}</span>
            <button className="btn">
              <AddIcon
                className="material-icons"
                onClick={() => handleIncrease()}
              />
            </button>
          </span>
          <span className="price">
            <CloseIcon
              className="material-icons"
              onClick={() => handleRemove()}
            />
            <span className="item-price">
              ${(+product.price * product.quantity).toFixed(2)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
type cartItemType = {
  product: ProductsType;
  handleQuantity: (product: ProductsType) => void;
  rmItem: (product: ProductsType) => void;
};
