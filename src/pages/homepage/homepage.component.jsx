import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import MiniPalette from "../../components/mini-palette/mini-palette.component";
import { useStyles } from "./homepage.style";

const Homepage = () => {
  const palettes = useSelector((state) => state.palette.palettes);
  const classes = useStyles();
  const history = useHistory();
  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  const palettesList = palettes.map((palette) => (
    <MiniPalette
      key={palette.id}
      {...palette}
      handleClick={() => goToPalette(palette.id)}
    />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Color</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>

        <div className={classes.palettes}>{palettesList}</div>
      </div>
    </div>
  );
};

export default Homepage;
