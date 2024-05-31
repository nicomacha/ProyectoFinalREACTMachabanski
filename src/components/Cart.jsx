import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import tacho from "../assets/images/trash.svg";
const Cart = () => {
  const {
    carrito,
    removeProduct,
    clearCart,
    contadorProductos,
    sumaTotalProductos,
  } = useContext(CartContext);

  if (contadorProductos() == 0) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col text-center">
            <div className="alert alert-warning" role="alert">
              <h2>No hay articulos en el carrito!!</h2>
              <Link to={"/"} className="btn btn-dark rounded-0 my-4">
                VOLVER A LA PAGINA PRINCIPAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col">
          <table className="table">
            <tbody>
              {carrito.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <img src={prod.imagen} alt={prod.nombre} width={80} />
                  </td>
                  <td>{prod.nombre}</td>
                  <td>${prod.precio}</td>
                  <td>{prod.cantidad}</td>
                  <td className="btn btn-danger bg-danger">
                    <img
                      src={tacho}
                      width={20}
                      onClick={() => {
                        removeProduct(prod.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>
                  <b>Total</b>
                </td>
                <td>
                  <b>${sumaTotalProductos()}</b>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Link
                    to={"/checkout"}
                    className="btn btn-dark rounded-0 text-end"
                  >
                    Checkout
                  </Link>
                </td>
              </tr>
              <tr>
                <td colSpan={5} className="text-end">
                  <button
                    className="btn btn-danger rounded-0"
                    onClick={() => clearCart()}
                  >
                    VACIAR CARRITO
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
