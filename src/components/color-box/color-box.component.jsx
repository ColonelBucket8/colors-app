import React from "react";
import "./color-box.style.css";

const ColorBox = ({ background, name }) => {
  return (
    <div style={{ background }} className="ColorBox">
      <span>{name}</span>
      <span>MORE</span>
    </div>
  );
};

export default ColorBox;
