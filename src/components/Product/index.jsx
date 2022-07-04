import React from "react";
import "../Product/style.css";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";

const Product = (props) => {
  return (
    <section id="content">
      <div className="container">
        <h6>
          <strong>Telusuri Kategori</strong>
        </h6>
        <div className="button-group">
          <button type="button" class="btn btn-primary kategori">
            <i className="fas fa-search"></i>&nbsp; Semua
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Hobi
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Kendaraan
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Baju
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Elektronik
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Kesehatan
          </button>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <a className="card" href="/halamanproduct"></a>
              <img className="Image1" src={Image1} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image2" src={Image2} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image1" src={Image1} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image2" src={Image2} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image1" src={Image1} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image2" src={Image2} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image1" src={Image1} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image2" src={Image2} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image1" src={Image1} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image2" src={Image2} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image1" src={Image1} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-2 mb-2 p-1">
              <img className="Image2" src={Image2} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jam Tangan Casio</h5>
                <p className="card-text">Aksesoris</p>
                <span className="fw-bold">Rp 250.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
