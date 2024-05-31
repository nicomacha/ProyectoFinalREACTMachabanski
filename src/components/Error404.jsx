import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>E R R O R 4 0 4</h1>
          <p>La pagina que estas buscando no existe!!</p>
          <p>
            <Link to={"/"} className="btn bg-black text-white">
              Volver a la pagina PRINCIPAL
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
