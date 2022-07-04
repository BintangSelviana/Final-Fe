/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../DaftarJual/style.css";
import Rectangle32 from "../../assets/images/Rectangle 32.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import { IoCubeOutline } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";

const DaftarJual = (props) => {
  return (
    <div className="containerr-fluid py-2">
      <div className="containerr">
        <div>
          <div className="Daftarjual py-3">
            <h5>
              <strong>Daftar Jual Saya</strong>
            </h5>
          </div>
          <div className="card">
            <div className="card-atas p-3">
              <div>
                <img className="Rectangle32" src={Rectangle32} alt=""></img>
              </div>
              <div className="card-textt">
                <h6>
                  <strong>Nama Penjual</strong>
                </h6>
                <h7>Kota</h7>
              </div>
              <button type="button" className="btn3">
                <a href="/home" className="buttoni">
                  Edit{" "}
                </a>
              </button>
            </div>
          </div>
          <div className="col-11 bordered py-3">
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="kategorii">
                    <div className="kategori1 d-flex justify-content-between">
                      <strong>Kategori</strong>
                    </div>
                    <div className="list1 list-group-flush justify-content-between">
                      <a className="list-group-item" href="/">
                        <IoCubeOutline />
                        &nbsp; Semua Produk &ensp;
                        <IoChevronForwardSharp />
                      </a>
                      <a className="list-group-item" href="/">
                        <IoHeartOutline />
                        &nbsp; Diminati
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                        <IoChevronForwardSharp />
                      </a>
                      <a className="list-group-item" href="/">
                        <FiDollarSign />
                        &nbsp; Terjual
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;
                        <IoChevronForwardSharp />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div class="row">
                  <div class="col-6 col-md-4 col-lg-4 mb-3">
                    <div className="card">
                      <div className="card-satu">
                        <a href="/">
                          <p className="card-text">
                            <BsPlusLg />
                          </p>
                        </a>
                        <p>Tambah Produk</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-4 mb-3 ">
                    <div className="card">
                      <img className="image1" src={image1} alt=""></img>
                      <div className="card-body">
                        <h5 className="card-title">Jam Tangan Casio</h5>
                        <p className="card-text">Aksesoris</p>
                        <a>Rp.250.000</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-4 mb-3">
                    <div className="card">
                      <img className="image2" src={image2} alt=""></img>
                      <div className="card-body">
                        <h5 className="card-title">Jam Tangan Casio</h5>
                        <p className="card-text">Aksesoris</p>
                        <a>Rp.250.000</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-4 mb-3">
                    <div className="card">
                      <img className="image2" src={image2} alt=""></img>
                      <div className="card-body">
                        <h5 className="card-title">Jam Tangan Casio</h5>
                        <p className="card-text">Aksesoris</p>
                        <a>Rp.250.000</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4 mb-3">
                    <div className="card">
                      <img className="image1" src={image1} alt=""></img>
                      <div className="card-body">
                        <h5 className="card-title">Jam Tangan Casio</h5>
                        <p className="card-text">Aksesoris</p>
                        <a>Rp.250.000</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-4 mb-3">
                    <div className="card">
                      <img className="image2" src={image2} alt=""></img>
                      <div className="card-body">
                        <h5 className="card-title">Jam Tangan Casio</h5>
                        <p className="card-text">Aksesoris</p>
                        <a>Rp.250.000</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarJual;
