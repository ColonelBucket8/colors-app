import { PaletteActionTypes } from "./palette.types";
import { deletePaletteFromList, findPalette } from "./palette.utils";
import seedColors from "../../seedColors";

const INITIAL_STATE = {
  palettes: seedColors,
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
        palettes: deletePaletteFromList(state.palettes, action.payload),
      };
    case PaletteActionTypes.FIND_PALETTE:
      return {
        ...state,
        palettes: findPalette(state.palettes, action.payload),
      };
    default:
      return state;
  }
};

export default paletteReducer;
