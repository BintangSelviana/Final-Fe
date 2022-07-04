import React from "react";
import "../NavbarProduct/style.css";
import Search from "../../assets/images/search.png";
import Rectangle127 from "../../assets/images/Rectangle 127.png";
import ListSolid from "../../assets/images/list-solid.svg";
import BellRegular from "../../assets/images/bell-regular.svg";
import UserRegular from "../../assets/images/user-regular.svg";
import Image3 from "../../assets/images/fi_arrow-left.svg";

const NavbarProduct = (props) => {
  return (
    <div className="navi">
      <form className="searchbarr">
        <a href="/" className="logo">
          <img className="Rectangle127" src={Rectangle127} alt="" />
        </a>

        <input type="text" name="search" placeholder="Cari di sini ..." />
        <button>
          <img className="Search" src={Search} alt="" />
        </button>
      </form>
      <navi>
        <a href="#">
          <img className="ListSolid" src={ListSolid} alt="" />
        </a>
        <a href="#">
          <img className="BellRegular" src={BellRegular} alt="" />
        </a>
        <a href="#">
          <img sclassName="UserRegular" src={UserRegular} alt="" />
        </a>
      </navi>
      <div class="back">
        <a href="/home">
          <img className="Image3" src={Image3} alt="" />
        </a>
      </div>
    </div>
  );
};
export default NavbarProduct;
