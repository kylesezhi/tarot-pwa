import React from "react";
import "./BackChevron.css";
import chevron from "./assets/chevron-left-svgrepo-com.svg";

function BackChevron({ show = true }) {
  const style = {
    opacity: show ? "0.4" : "0",
  };
  return (
    <div className="back-chevron-container">
      <img
        src={chevron}
        className="back-chevron"
        alt="back-chevron"
        style={style}
      />
    </div>
  );
}

export default BackChevron;
