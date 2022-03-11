import React, { useState } from "react";
import PaletteMetaForm from "../palette-meta-form/palette-meta-form.component";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import useStyles from "./palette-form-nav.style";

const PaletteFormNav = ({ open, handleDrawerOpen }) => {
  const [formShowing, setFormShowing] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create a palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setFormShowing(true)}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && <PaletteMetaForm setFormShowing={setFormShowing} />}
    </div>
  );
};

export default PaletteFormNav;
