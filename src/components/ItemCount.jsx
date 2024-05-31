import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ max, onAdd }) => {
  const [contador, setContador] = useState(1);
  const [stock, setItemStock] = useState(max);
  const [visible, setVisible] = useState(true);

  const sumarProd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarProd = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    if (contador <= stock) setItemStock(stock - contador);
    onAdd(contador);
    setContador(1);
    setVisible(false);
  };

  useEffect(() => {
    setItemStock(max);
  }, [max]);
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-dark" onClick={restarProd}>
            -
          </button>
          <button type="button" className="btn btn-light">
            {contador}
          </button>
          <button type="button" className="btn btn-dark" onClick={sumarProd}>
            +
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {visible ? (
            <button
              type="button"
              className="btn btn-dark"
              onClick={agregarCarrito}
            >
              AGREGAR AL CARRITO
            </button>
          ) : (
            <Link to={"/cart"} className="btn btn-dark" onClick={onAdd}>
              FINALIZAR COMPRA
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
