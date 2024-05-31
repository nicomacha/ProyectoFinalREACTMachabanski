import nba from "../assets/images/nba-princ.jpg";
import nfl from "../assets/images/nfl-princ.jpg";
import logo from "../assets/images/logo-mk.jpg";
import Carrousel from "./Carrousel";
import { Link } from "react-router-dom";

const Inicio = () => {
  <Carrousel />;
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="d-flex justify-content-center">
              <img
                src={nba}
                className="card-img-top"
                alt="..."
                style={{ width: "400px", height: "auto" }}
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Link to={"/category/nba"}>
                  <button type="button" className="btn btn-dark">
                    NBA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="d-flex justify-content-center">
              <img
                src={logo}
                className="card-img-top"
                alt="..."
                style={{ width: "400px", height: "auto" }}
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Link to={"/category/todas"}>
                  <button type="button" className="btn btn-dark">
                    TODAS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="d-flex justify-content-center">
              <img
                src={nfl}
                className="card-img-top"
                alt="..."
                style={{ width: "400px", height: "auto" }}
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Link to={"/category/nfl"}>
                  <button type="button" className="btn btn-dark">
                    NFL
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
