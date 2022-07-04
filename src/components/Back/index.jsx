import React from "react";
import "../Back/style.css";
import Image3 from "../../assets/images/fi_arrow-left.svg";

const Back = (props) => {
  return (
    <div class="back">
      <a href="/home">
        <img className="Image3" src={Image3} alt="" />
      </a>
    </div>
  );
};
export default Back;
