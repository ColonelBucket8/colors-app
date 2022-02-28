import { createSlice } from "@reduxjs/toolkit";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: seedColors,
  },

  reducers: {
    setCurrentPalette: (state) => {
      state.palettes = seedColors;
    },
  },
});

export const { setCurrentPalette } = paletteSlice.actions;

export default paletteSlice.reducer;
