import React from "react";
import "../InfoProfil/style.css";
import Camera from "../../assets/images/camera.png";

const InfoProfil = (props) => {
  return (
    <div class="container ">
      <div>
        <a href="/ ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
      </div>
      <div class="row justify-content-center ">
        <div class="col-12 col-sm-6 col-md-6 ">
          <form>
            <div class="mb-3 mt-4" style={{left: '45%'}}>
              <div class="card4"  style={{left: '45%'}}>
                <div class=" card-body ">
                  &nbsp;
                  <a href="/ ">
                    <img
                      className="Camera" src={Camera} style={{width: '2rem', left: '45%'}}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="mb-3 ">
              <label for="nama " class="form-label ">
                <strong>Nama</strong>
              </label>
              <input
                type="text "
                class="form-control "
                id="produk "
                placeholder="Nama "
              />
            </div>
            <div class="mb-3 ">
              <label for="kota " class="form-label ">
                <strong>Kota</strong>
              </label>
              <select id="disabledSelect " class="form-select ">
                <option>Pilih Kota</option>
                <option value="# ">Bandung</option>
                <option value="# ">Karawang</option>
                <option value="# ">Jakarta</option>
              </select>
            </div>
            <div class="mb-3 ">
              <label for="alamat " style={{borderRadius: '6px'}} class="form-label ">
                <strong>Alamat</strong>
              </label>
              <textarea
                name="alamat "
                id="alamat "
                cols="75 "
                rows="5 "
                
                placeholder="Contoh jalan perwira buana "
              ></textarea>
            </div>
            <div class="mb-3 ">
              <label for="hp " class="form-label ">
                <strong>No Handphone</strong>
              </label>
              <input
                type="number "
                class="form-control "
                id="hp "
                placeholder="Contoh: +628123456789 "
              />
            </div>
            <div class="mb-3 ">
              <button type="simpan " class="btn7 btn-primary ">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InfoProfil;
