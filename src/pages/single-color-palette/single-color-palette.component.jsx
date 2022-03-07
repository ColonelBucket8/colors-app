import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFormat } from "../../redux/palette/palette.slices";
import Navbar from "../../components/navbar/navbar.component";
import ColorBox from "../../components/color-box/color-box.component";
import PaletteFooter from "../../components/palette-footer/palette-footer.component";
import { withStyles } from "@material-ui/styles";

const styles = {
  IndividualPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-0.3%",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
};

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
      <h1>SINGLE COLOR PALETTE</h1>
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
