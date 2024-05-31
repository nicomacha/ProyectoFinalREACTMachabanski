import { Link, NavLink } from "react-router-dom";
import logo from "../assets//images/logo-mk.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-black p-2">
        <div className="col"></div>
        <div className="col md text-center">
          <Link to={"/"}>
            <img src={logo} alt="GORRASMK" width={100} />
          </Link>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="nav nav-tabs justify-content-center ">
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark text-decoration-none"
                aria-current="page"
                to={"/"}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item  dropdown">
              <NavLink
                className="nav-link text-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Gorras
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item " to={"/category/todas"}>
                    Todas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/category/nba"}>
                    NBA
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/category/nfl"}>
                    NFL
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
