import React from "react";
import "../NavbarInfo/style.css";
import Rectangle127 from "../../assets/images/Rectangle 127.png";

const NavbarInfo = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white ">
      <div className="container pt-1 pb-1" id="navbarNavAltMarkup">
        <hr></hr>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="navbar-brand" href="/">
              <img className="Rectangle127" src={Rectangle127} alt="logo" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarInfo;
