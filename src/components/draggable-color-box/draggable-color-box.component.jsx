import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-0.3%",
  },
});

const DraggableColorBox = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
};

export default DraggableColorBox;
