import React, { useState } from "react";
import { snapshotToArray } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../../redux/palette/palette.slices";
import { useHistory, Link } from "react-router-dom";
import MiniPalette from "../../components/mini-palette/mini-palette.component";
import { useStyles } from "./homepage.style";

const Homepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };
  // const palettes = useSelector((state) => state.palette.palettes);
  const [isLoading, setIsLoading] = useState(true);
  const palettes = snapshotToArray("palettes");
  console.log(palettes);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Color</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        {!isLoading ? (
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={() => goToPalette(palette.id)}
              />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default Homepage;
