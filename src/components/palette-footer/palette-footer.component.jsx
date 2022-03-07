import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./palette-footer.style";

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
