import { createSlice } from "@reduxjs/toolkit";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: [],
    level: 500,
    format: "hex",
    currentColor: "teal",
    colors: seedColors[0].colors,
    isLoading: true,
  },

  reducers: {
    setPalettes: (state, action) => {
      state.palettes = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setFormat: (state, action) => {
      state.format = action.payload;
    },
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    deleteColor: (state, action) => {
      state.colors = state.colors.filter(
        (color) => color.name !== action.payload
      );
    },
    deletePalette: (state, action) => {
      state.palettes = state.palettes.filter(
        (palette) => palette.paletteName !== action.payload
      );
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {
  setPalettes,
  setLevel,
  setFormat,
  setCurrentColor,
  setColors,
  deleteColor,
  deletePalette,
  setIsLoading,
} = paletteSlice.actions;

export default paletteSlice.reducer;
