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

export const { setLevel, setFormat, setCurrentColor, setColors } =
  paletteSlice.actions;

export default paletteSlice.reducer;
