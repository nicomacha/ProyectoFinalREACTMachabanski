import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { carrito, contadorProductos, sumaTotalProductos } =
    useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pedidoId, setPedidoId] = useState();

  const generarPedido = () => {
    const comprador = { nombre: nombre, email: email, telefono: telefono };
    const productos = carrito.map((prod) => ({
      id: prod.id,
      titulo: prod.nombre,
      precio: prod.precio,
    }));
    const fecha = new Date();
    const fechaActual = `${fecha.getDate()}-${
      fecha.getMonth() + 1
    }-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    const pedido = {
      comprador: comprador,
      productos: productos,
      fecha: fechaActual,
      total: sumaTotalProductos(),
    };

    const db = getFirestore();
    const ordenesCollection = collection(db, "pedidos");
    addDoc(ordenesCollection, pedido).then((data) => {
      setPedidoId(data.id);
    });
  };

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
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Telefono</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={generarPedido}
            >
              Generar pedido
            </button>
          </form>
        </div>
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
                </tr>
              ))}
              <tr>
                <td colSpan={2}>
                  <b>Total</b>
                </td>
                <td>
                  <b>${sumaTotalProductos()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {pedidoId ? (
            <div className="alert alert-dark" role="alert">
              Gracias por tu compra! Tu numero de id es: <b>{pedidoId}</b>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
