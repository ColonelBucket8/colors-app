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
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const PaletteMetaForm = ({ setFormShowing }) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const [stage, setStage] = useState("form");
  const [open, setOpen] = useState(true);
  const [newPaletteName, setNewPaletteName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const colors = useSelector((state) => state.palette.colors);
  const palettes = useSelector((state) => state.palette.palettes);

  const handleClose = () => {
    setOpen(false);
    setFormShowing(false);
  };

  const handleSubmit = (emoji) => {
    let newName = newPaletteName;

    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji,
      colors: colors,
    };
    dispatch(setPalettes(newPalette));
    setFormShowing(false);
    history.push("/");
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const savePalette = (emoji) => {
    const newEmoji = emoji.native;
    handleSubmit(newEmoji);
  };

  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>

        <Picker title="Pick a Palette Emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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
    </div>
  );
};

export default PaletteMetaForm;
