import { PaletteActionTypes } from "./palette.types";
import seedColors from "../../seedColors";

const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

const INITIAL_STATE = {
  currentPalette: savedPalettes || seedColors,
};

const paletteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaletteActionTypes.SET_CURRENT_PALETTE:
      return {
        ...state,
        currentPalette: action.payload,
      };

    default:
      return state;
  }
};

export default paletteReducer;
