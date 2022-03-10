import React from "react";
import { useDispatch } from "react-redux";
import DraggableColorBox from "../draggable-color-box/draggable-color-box.component";
import { SortableContainer } from "react-sortable-hoc";
import { deleteColor } from "../../redux/palette/palette.slices";

const DraggableColorList = SortableContainer(({ colors }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => dispatch(deleteColor(color.name))}
        />
      ))}
    </div>
  );
});
export default DraggableColorList;
