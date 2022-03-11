import React, { useState } from "react";
import { useSelector } from "react-redux";
import PaletteFormNav from "../../components/palette-form-nav/palette-form-nav.component";
import DrawerMeta from "../../components/drawer-meta/drawer-meta.component";
import clsx from "clsx";
import DraggableColorList from "../../components/draggable-color-list/draggable-color-list.component";
import useStyles from "./new-palette-form.style";
// import { arrayMove } from "react-sortable-hoc";

const NewPaletteForm = () => {
  const colors = useSelector((state) => state.palette.colors);
  const palettes = useSelector((state) => state.palette.palettes);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        palettes={palettes}
        colors={colors}
      />
      <DrawerMeta
        colors={colors}
        palettes={palettes}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
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
