import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { deletePalette } from "../../redux/palette/palette.slices";
import { useStyles } from "./mini-palette.style";

const MiniPalette = ({ paletteName, emoji, colors, handleClick }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const removePalette = (evt) => {
    evt.stopPropagation();
    dispatch(deletePalette(paletteName));
  };

  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={removePalette}
        />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default MiniPalette;
