import { useState } from "react";
import { CUN_URL } from "../utils/contents";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Menu = () => {
  const [logInOut, setInOut] = useState("Login");
  const online = useOnline();
  return (
    <nav className="navbar navbar-expand-sm  menu-swiggy">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img className="logo" src={CUN_URL} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" me-5" id="mynavbar">
          <div>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                {" "}
                Status{" "}
                {online ? (
                  <i
                    className="fa fa-dot-circle-o nav-link"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-dot-circle-o red nav-link"
                    aria-hidden="true"
                  ></i>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn  btn-primary"
                  type="button"
                  onClick={() => {
                    logInOut === "Login"
                      ? setInOut("Logout")
                      : setInOut("Login");
                  }}
                >
                  {logInOut}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;