import "./Menu.scss";
import Products from "@/app/(pages)/menu/Products/Products";

export default function Menu() {
  return (
    <div className="menu-content">
      <div className="container">
        <div className="menu">
          <Products />
        </div>
      </div>
    </div>
  );
}
