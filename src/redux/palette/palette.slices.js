import { createSlice } from "@reduxjs/toolkit";
import { findPalette } from "./palette.utils";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: seedColors,
    palette: null,
    level: 500,
    format: "hex",
  },

  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setFormat: (state, action) => {
      state.format = action.payload;
    },
    setPalette: (state, action) => {
      state.palette = findPalette(state.palettes, action.payload);
    },
  },
});

export const { setLevel, setFormat, setPalette } = paletteSlice.actions;

export default paletteSlice.reducer;
