import { Link } from "react-router-dom";
const Item = ({ productoCard }) => {
  return (
    <div className="col-md-4 text-center ">
      <Link to={"/item/" + productoCard.id} className="text-decoration-none">
        <div className="card border-0">
          <img src={productoCard.imagen} className="img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text text-uppercase">{productoCard.nombre}</p>
            <p className="card-text">${productoCard.precio}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
