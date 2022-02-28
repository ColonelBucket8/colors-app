import React from "react";
import { useSelector } from "react-redux";
import ColorBox from "../color-box/color-box.component";
import { palettes } from "../../redux/palette/palette.selectors";
import "./palette.style.css";

const Palette = () => {
  const palette = useSelector(palettes);
  const colors = palette[0].colors;
  console.log(colors);
  const colorBox = colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBox}</div>
    </div>
  );
};

export default Palette;
