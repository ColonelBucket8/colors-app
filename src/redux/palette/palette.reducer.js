import { PaletteActionTypes } from "./palette.types";
import seedColors from "../../seedColors";
import { savedPalettes, syncLocalStorage } from "./palette.utils";

const INITIAL_STATE = {
  palettes: savedPalettes || seedColors,
};

const paletteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaletteActionTypes.SET_CURRENT_PALETTE:
      return {
        ...state,
        palettes: state.palettes,
      };

    case PaletteActionTypes.SAVE_PALETTE:
      return {
        ...state,
        palettes: [...state.palettes, action.payload],
      };
    case PaletteActionTypes.DELETE_PALETTE:
      return {
        ...state,
        palettes: state.palettes.filter(
          (palette) => palette.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default paletteReducer;
