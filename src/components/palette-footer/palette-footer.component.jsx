import React from "react";
import { useStyles } from "./palette-footer.style";

const PaletteFooter = (props) => {
  const classes = useStyles();
  const { paletteName, emoji } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
