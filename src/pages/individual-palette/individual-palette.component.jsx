import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setLevel, setFormat } from "../../redux/palette/palette.slices";
import Navbar from "../../components/navbar/navbar.component";
import ColorBox from "../../components/color-box/color-box.component";
import PaletteFooter from "../../components/palette-footer/palette-footer.component";
import { useStyles } from "./individual-palette.style";

const IndividualPalette = (props) => {
  const classes = useStyles();
  const { palette } = props;
  const dispatch = useDispatch();
  const location = useLocation();
  const level = useSelector((state) => state.palette.level);
  const format = useSelector((state) => state.palette.format);
  const [open, setOpen] = useState(false);
  const colors = palette.colors;
  const colorBox = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      id={color.id}
      currentUrl={location.pathname}
      showingFullPalette
    />
  ));

  const changeLevel = (level) => {
    dispatch(setLevel(level));
  };

  const changeFormat = (e) => {
    dispatch(setFormat(e.target.value));
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div className={classes.IndividualPalette}>
      <Navbar
        format={format}
        level={level}
        changeLevel={changeLevel}
        handleFormatChange={changeFormat}
        handleClick={handleClick}
        open={open}
        showingAllColors
      />
      <div className={classes.colors}>{colorBox}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default IndividualPalette;
