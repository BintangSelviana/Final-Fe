import React from "react";
import "../Carousel/style.css";
import ImgBanner from "../../assets/images/img banner.png";
import Rectangle128 from "../../assets/images/Rectangle 128.png";
// import "../public/css/owl.carousel.min.css";

const Carousel = (props) => {
  return (
    <section id="carousel">
      <br></br>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img
              className="ImgBanner"
              src={ImgBanner}
              class="d-block w-100 px-5 mb-2"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              className="Retangle128"
              src={Rectangle128}
              class="d-block w-100 px-5 mb-2"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              className="Retangle128"
              src={Rectangle128}
              class="d-block w-100 px-5 mb-2"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
export default Carousel;
