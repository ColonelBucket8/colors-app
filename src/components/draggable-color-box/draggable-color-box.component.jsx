import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./draggable-color-box.style";

const DraggableColorBox = SortableElement((props) => {
  const classes = useStyles(props);
  const { handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default DraggableColorBox;
