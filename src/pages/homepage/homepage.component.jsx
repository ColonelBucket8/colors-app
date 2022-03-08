import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import MiniPalette from "../../components/mini-palette/mini-palette.component";
import { withStyles } from "@material-ui/styles";
import styles from "./homepage.style";

const Homepage = (props) => {
  const history = useHistory();
  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };
  const { classes } = props;
  const palettes = useSelector((state) => state.palette.palettes);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Color</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              {...palette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Homepage);
