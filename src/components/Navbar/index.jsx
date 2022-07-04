import React from "react";
import "../Navbar/style.css";
import Rectangle127 from "../../assets/images/Rectangle 127.png";

// import "../Navbar/sidenav.jsx";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white ">
      <div className="collapse navbar-collapse ms-lg-5" id="navbarNavAltMarkup">
        <hr></hr>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="navbar-brand" href="/">
              <img className="Rectangle127" src={Rectangle127} alt="logo" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container pt-1 pb-1 space-even">
        <button className="navbar-toggler" type="button">
          <span className="open navbar-toggler-icon" onclick="openNav()"></span>
        </button>
        <form className="d-flex" role="search">
          <div className="input-group rounded">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Cari di sini..."
              aria-label="Search"
              for="form1"
            />
            <span className="input-group-text search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </form>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <hr></hr>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="navbar-brand" href="#"></a>
            </li>
          </ul>
          <div className="d-grid">
            <a href="/login">
              <button
                type="button"
                className="btn btn-primary btn-block kategori"
              >
                <i className="fas fa-arrow-right-to-bracket"></i>&nbsp; Masuk
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
