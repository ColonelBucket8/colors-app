import React from "react";
import { useSelector } from "react-redux";
import Palette from "./components/palette/palette.component";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const palettes = useSelector((state) => state.palette.palettes);
  return (
    <div>
      <Palette palette={generatePalette(palettes[1])} />
    </div>
  );
};

export default App;
