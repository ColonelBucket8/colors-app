import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentColor, setColors } from "../../redux/palette/palette.slices";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import useStyles from "./color-picker-form.style";

const ColorPickerForm = ({ paletteIsFull, colors }) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every((color) => color.name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colors.every((color) => color.color !== currentColor)
    );
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentColor = useSelector((state) => state.palette.currentColor);
  const [newColorName, setNewColorName] = useState("");

  const addNewColor = () => {
    const newColor = { color: currentColor, name: newColorName };
    dispatch(setColors([...colors, newColor]));
    setNewColorName("");
  };

  const updateCurrentColor = (newColor) => {
    dispatch(setCurrentColor(newColor.hex));
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />
      <ValidatorForm
        onSubmit={addNewColor}
        onError={(error) => console.log(error)}
      >
        <TextValidator
          value={newColorName}
          className={classes.colorNameInput}
          placeholder="Color Name"
          name="newColorName"
          variants="filled"
          margin="normal"
          onChange={(evt) => setNewColorName(evt.target.value)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used",
          ]}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={paletteIsFull}
          className={classes.addColor}
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
        >
          {paletteIsFull ? "Palette is full" : "Add color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
