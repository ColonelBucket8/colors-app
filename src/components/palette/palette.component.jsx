import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../../redux/palette/palette.slices";
import Navbar from "../navbar/navbar.component";
import ColorBox from "../color-box/color-box.component";
import "./palette.style.css";

const Palette = ({ palette }) => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.palette.level);
  const colors = palette.colors;
  const colorBox = colors[level].map((color) => (
    <ColorBox key={color.name} background={color.hex} name={color.name} />
  ));

  const changeLevel = (level) => {
    dispatch(setLevel(level));
  };
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">{colorBox}</div>
    </div>
  );
};

export default Palette;
