import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel, setFormat } from "../../redux/palette/palette.slices";
import Navbar from "../navbar/navbar.component";
import ColorBox from "../color-box/color-box.component";
import "./palette.style.css";

const Palette = ({ palette }) => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.palette.level);
  const format = useSelector((state) => state.palette.format);
  const colors = palette.colors;
  const colorBox = colors[level].map((color) => (
    <ColorBox key={color.name} background={color[format]} name={color.name} />
  ));

  const changeLevel = (level) => {
    dispatch(setLevel(level));
  };

  const changeFormat = (e) => {
    dispatch(setFormat(e.target.value));
  };
  return (
    <div className="Palette">
      <Navbar
        format={format}
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">{colorBox}</div>
    </div>
  );
};

export default Palette;
