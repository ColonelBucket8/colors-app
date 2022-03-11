import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPalettes } from "../../redux/palette/palette.slices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const PaletteMetaForm = ({ setFormShowing }) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const [open, setOpen] = useState(true);
  const [newPaletteName, setNewPaletteName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const colors = useSelector((state) => state.palette.colors);
  const palettes = useSelector((state) => state.palette.palettes);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormShowing(false);
  };

  const handleSubmit = () => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
    };
    dispatch(setPalettes(newPalette));
    setFormShowing(false);
    history.push("/");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for you new beautiful palette. Make sure it's
            unique.
          </DialogContentText>
          <TextValidator
            label="Palette Name"
            name="newPaletteName"
            value={newPaletteName}
            fullWidth
            margin="normal"
            onChange={(evt) => setNewPaletteName(evt.target.value)}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={[
              "Enter palette name",
              "Palette name is already taken",
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default PaletteMetaForm;
