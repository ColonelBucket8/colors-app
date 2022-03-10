import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColors } from "../../redux/palette/palette.slices";
import PaletteFormNav from "../../components/palette-form-nav/palette-form-nav.component";
import ColorPickerForm from "../../components/color-picker-form/color-picker-form.component";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "../../components/draggable-color-list/draggable-color-list.component";
import useStyles from "./new-palette-form.style";
// import { arrayMove } from "react-sortable-hoc";

const NewPaletteForm = () => {
  const colors = useSelector((state) => state.palette.colors);
  const palettes = useSelector((state) => state.palette.palettes);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const maxColors = 20;
  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    dispatch(setColors([...colors, randomColor]));
  };

  // const onSortEnd = ({ oldIndex, newIndex }) => {
  //   const draggableColors = ({ colors }) =>
  //     colors.arrayMove(colors, oldIndex, newIndex);
  //   console.log(draggableColors());
  //   // dispatch(setColors(draggableColor));
  // };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        palettes={palettes}
        colors={colors}
      />
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
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setColors([]))}
          >
            Clear color
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </div>
        <ColorPickerForm paletteIsFull={paletteIsFull} colors={colors} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* onSortEnd={onSortEnd}  */}
        <DraggableColorList colors={colors} axis="xy" />
      </main>
    </div>
  );
};

export default NewPaletteForm;
