import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar col-12 navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              <img
                src="assets/image/logo.png"
                className="img-fluid rounded-top"
                alt="weather"
                width={40}
                height={40}
              />
            </Link>
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
            <div
              className="collapse navbar-collapse col-10"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/weather"
                  >
                    Weather
                  </Link>
                </li>
                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">
                                        Search
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">
                                        Result
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">
                                        Reset
                                    </Link>
                                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Header;
