import React from "react";

import NavbarLogin from "../../components/NavbarLogin";
import Carousel from "../../components/Carousel";
import Product2 from "../../components/Product2";
import Floating from "../../components/Floating";

const Home = (props) => {
  return (
    <>
      <NavbarLogin />
      <Carousel />
      <Product2 />
      <Floating />
    </>
  );
};
export default Home;