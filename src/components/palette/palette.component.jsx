import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../../redux/palette/palette.slices";
import ColorBox from "../color-box/color-box.component";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
      <div className="Palette-colors">{colorBox}</div>
    </div>
  );
};

export default Palette;
