import React from "react";
import { useDispatch } from "react-redux";
import { setColors } from "../../redux/palette/palette.slices";
import ColorPickerForm from "../../components/color-picker-form/color-picker-form.component";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import useStyles from "./drawer-meta.style";

const DrawerMeta = ({ colors, palettes, handleDrawerClose, open }) => {
  const dispatch = useDispatch();
  const maxColors = 20;

  const paletteIsFull = colors.length >= maxColors;
  const classes = useStyles();

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    dispatch(setColors([...colors, randomColor]));
  };
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Design Your Palette
        </Typography>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setColors([]))}
            className={classes.button}
          >
            Clear color
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
            className={classes.button}
          >
            Random Color
          </Button>
        </div>
        <ColorPickerForm paletteIsFull={paletteIsFull} colors={colors} />
      </div>
    </Drawer>
  );
};

export default DrawerMeta;
