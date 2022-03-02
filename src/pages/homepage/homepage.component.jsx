import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Homepage = () => {
  const palettes = useSelector((state) => state.palette.palettes);

  return (
    <div className="Homepage">
      <h1>React Color</h1>
      {palettes.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default Homepage;
