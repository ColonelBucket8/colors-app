import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFormat } from "../../redux/palette/palette.slices";
import Navbar from "../../components/navbar/navbar.component";
import ColorBox from "../../components/color-box/color-box.component";
import PaletteFooter from "../../components/palette-footer/palette-footer.component";
import { withStyles } from "@material-ui/styles";
import styles from "./single-color-palette.style";

const SingleColorPalette = ({ colorId, palette, classes }) => {
  const dispatch = useDispatch();
  const format = useSelector((state) => state.palette.format);
  const [open, setOpen] = useState(false);
  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };
  const shades = gatherShades(palette, colorId);

  const changeFormat = (e) => {
    dispatch(setFormat(e.target.value));
    setOpen(true);
  };
  const handleClick = () => {
    setOpen(false);
  };
  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));
  return (
    <div className={classes.IndividualPalette}>
      <Navbar
        format={format}
        handleFormatChange={changeFormat}
        open={open}
        handleClick={handleClick}
        showingAllColors={false}
      />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
