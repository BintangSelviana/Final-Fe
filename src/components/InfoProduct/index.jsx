import React from "react";
import "../InfoProduct/style.css";

const InfoProduct = (props) => {
  return (
    <div class="container">
      <div>
        <a href="/ ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-6 col-md-6">
          <form>
            <div class="mb-3 mt-4">
              <label for="produk" class="form-label">
                <strong>Nama Produk</strong>
              </label>
              <input
                type="text"
                class="form-control"
                id="produk"
                placeholder="Nama Produk"
              />
            </div>
            <div class="mb-3">
              <label for="harga" class="form-label">
                <strong>Harga Produk</strong>
              </label>
              <input
                type="number"
                class="form-control"
                id="harga"
                placeholder="Rp 0,00"
              />
            </div>
            <div class="mb-3">
              <label for="kategori" class="form-label">
                <strong>Kategori</strong>
              </label>
              <select id="disabledSelect" class="form-select">
                <option>Pilih Kategori</option>
                <option value="#">Jam tangan analog</option>
                <option value="#">Jam tangan digital</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">
                <strong>Deskripsi</strong>
              </label>
              <textarea
                name="deskripsi"
                id="desk"
                cols="75"
                rows="5"
                style={{ borderRadius: 5 + "px" }}
                placeholder="Contoh jalan perwira buana "
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="foto-produk" class="form-label">
                <strong>Foto Produk</strong>
              </label>
              <div class="cardd" style={{ width: "5rem" }}>
                <div class="card-body ">
                  &nbsp;&ensp;
                  <a href="/ ">
                    <i class="bi bi-plus-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="mb-3 ">
              <button
                type="submit "
                class="btn4 btn-primary"
                style={{ background: "#faf6fa", color: "black" }}
              >
                Preview
              </button>
              <button type="submit " class="btnnn btn-primary ">
                Terbitkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InfoProduct;
