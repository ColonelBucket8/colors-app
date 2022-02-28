import React from "react";
import { useSelector } from "react-redux";
import ColorBox from "../color-box/color-box.component";
import "./palette.style.css";

const Palette = () => {
  const palette = useSelector((state) => state.palette.palettes);
  const colors = palette[0].colors;

  const colorBox = colors.map((color) => (
    <ColorBox key={color.name} background={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBox}</div>
    </div>
  );
};

export default Palette;
