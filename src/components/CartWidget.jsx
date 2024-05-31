import { Link } from "react-router-dom";
import cart from "../assets/images/cart.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
const CartWidget = () => {
  const { contadorProductos } = useContext(CartContext);

  if (contadorProductos() > 0) {
    return (
      <Link to={"/cart"} className="btn btn-light position-relative">
        <img src={cart} alt="Cart" width={16} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {contadorProductos()}
        </span>
      </Link>
    );
  }
};

export default CartWidget;
