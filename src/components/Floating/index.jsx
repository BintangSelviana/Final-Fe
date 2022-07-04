import React from "react";
import "../Floating/style.css";

const Floating = (props) => {
  return (
    <section id="floating-btn">
      <div className="center">
        <button
          type="button"
          className="btn btn-primary btn-float"
          target="_blank"
        >
          <i className="fas fa-plus"></i> &nbsp; Jual
        </button>
      </div>
    </section>
  );
};
export default Floating;
