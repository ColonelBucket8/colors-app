import { PaletteActionTypes } from "./palette.types";

export const setCurrentPalette = () => ({
  type: PaletteActionTypes.SET_CURRENT_PALETTE,
});

export const savePalette = (palette) => ({
  type: PaletteActionTypes.SAVE_PALETTE,
  payload: palette,
});

export const deletePalette = (palette) => ({
  type: PaletteActionTypes.DELETE_PALETTE,
  payload: palette,
});
