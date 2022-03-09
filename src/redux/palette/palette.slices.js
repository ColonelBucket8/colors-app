import { createSlice } from "@reduxjs/toolkit";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: seedColors,
    level: 500,
    format: "hex",
    currentColor: "teal",
    colors: [{ color: "blue", name: "blue" }],
  },

  reducers: {
    setPalettes: (state, action) => {
      state.palettes = [...state.palettes, action.payload];
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
  },
});

export const { setPalettes, setLevel, setFormat, setCurrentColor, setColors } =
  paletteSlice.actions;

export default paletteSlice.reducer;
