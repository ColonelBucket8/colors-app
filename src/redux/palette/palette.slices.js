import { createSlice } from "@reduxjs/toolkit";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: seedColors,
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
  },
});

export const { setLevel, setFormat } = paletteSlice.actions;

export default paletteSlice.reducer;
