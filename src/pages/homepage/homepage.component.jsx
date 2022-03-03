import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MiniPalette from "../../components/mini-palette/mini-palette.component";

const Homepage = () => {
  const palettes = useSelector((state) => state.palette.palettes);

  return (
    <div className="Homepage">
      <MiniPalette />
      <h1>React Color</h1>
      {palettes.map((palette) => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
};

export default Homepage;
