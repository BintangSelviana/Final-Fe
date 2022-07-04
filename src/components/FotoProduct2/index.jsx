import React from "react";
import "../FotoProduct2/style.css";
import Image2 from "../../assets/images/image2.png";
import Carousell from "../../assets/images/carousel.svg";
import Rectangle32 from "../../assets/images/Rectangle 32.png";

const FotoProduct2 = (props) => {
  return (
    <div className="containerr">
      <div className="images">
        <img className="Image2" src={Image2} alt="" />
        <div className="carousell">
          <img className="Carousell" src={Carousell} alt="" />
        </div>
        <div className="deskripsii"></div>
      </div>
      <div className="buy">
        <div className="buy1">
          <h2>Jam Tangan Casio</h2>
          <h5>Aksesoris</h5>
          <h4>Rp 250.000</h4>

          <button className="terbitkan">Terbitkan</button>
          <button className="edit">Edit</button>
        </div>
        <div className="buy2">
          <div className="card-atas p-3">
            <div>
              <img className="Rectangle32" src={Rectangle32} alt=""></img>
            </div>
            <div className="card-textt">
              <h5>
                <strong>Nama Penjual</strong>
              </h5>
              <h5>
                <strong>Kota</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FotoProduct2;
