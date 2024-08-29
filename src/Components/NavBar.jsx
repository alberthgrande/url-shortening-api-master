import React from "react";
import ShortlyLogo from "../assets/images/logo.svg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={ShortlyLogo} alt="ShortlyLogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <a className="btn btn-outline-success" type="submit">
              Login
            </a>
            <a className="btn btn-outline-success" type="submit">
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
