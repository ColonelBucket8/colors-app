import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import MiniPalette from "../../components/mini-palette/mini-palette.component";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={() => goToPalette(palette.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Homepage;
