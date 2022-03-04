import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormat } from "../../redux/palette/palette.slices";
import Navbar from "../../components/navbar/navbar.component";
import ColorBox from "../../components/color-box/color-box.component";
import PaletteFooter from "../../components/palette-footer/palette-footer.component";

const SingleColorPalette = ({ colorId, palette }) => {
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
      key={color.id}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));
  return (
    <div className="Palette">
      <Navbar
        format={format}
        handleFormatChange={changeFormat}
        open={open}
        handleClick={handleClick}
        showingAllColors={false}
      />
      <h1>SINGLE COLOR PALETTE</h1>
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default SingleColorPalette;
