import React from "react";
import { useSelector } from "react-redux";
import ColorBox from "../../components/color-box/color-box.component";

const SingleColorPalette = ({ colorId, palette }) => {
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
  console.log(shades);
  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));
  return (
    <div className="Palette">
      <h1>SINGLE COLOR PALETTE</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
