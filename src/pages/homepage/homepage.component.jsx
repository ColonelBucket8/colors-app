import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import MiniPalette from "../../components/mini-palette/mini-palette.component";
import { useStyles } from "./homepage.style";

const Homepage = () => {
  const classes = useStyles();
  const history = useHistory();
  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };
  const palettes = useSelector((state) => state.palette.palettes);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Color</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
