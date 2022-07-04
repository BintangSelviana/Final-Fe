import React from "react";

import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Product from "../../components/Product";
import Floating from "../../components/Floating";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Product />
      <Floating />
    </>
  );
};
export default Home;