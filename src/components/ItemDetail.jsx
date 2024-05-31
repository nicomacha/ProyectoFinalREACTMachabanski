import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
const ItemDetail = ({ prod }) => {
  const { addProduct } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addProduct(prod, cantidad);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2 ">
          <img src={prod.imagen} className="img-fluid" alt={prod.nombre} />
        </div>
        <div className="col-md-4 text-center">
          <h1>{prod.nombre}</h1>
          <p>${prod.precio}</p>
          <ItemCount max={prod.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
