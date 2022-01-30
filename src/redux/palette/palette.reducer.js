import { PaletteActionTypes } from "./palette.types";
import seedColors from "../../seedColors";

const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

const INITIAL_STATE = {
  currentPalette: [],
};

const paletteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaletteActionTypes.SET_CURRENT_PALETTE:
      return {
        ...state,
        currentPalette: [savedPalettes || seedColors, action.payload],
      };

    default:
      return state;
  }
};

export default paletteReducer;
