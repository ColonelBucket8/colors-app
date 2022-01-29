import { PaletteActionTypes } from "./palette.types";

export const setCurrentPalette = (palette) => ({
  type: PaletteActionTypes.SET_CURRENT_PALETTE,
  payload: palette,
});

export const deletePalette = (palette) => ({
  type: PaletteActionTypes.DELETE_PALETTE,
  payload: palette,
});
