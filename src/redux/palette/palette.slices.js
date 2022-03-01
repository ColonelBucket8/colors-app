import { createSlice } from "@reduxjs/toolkit";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: seedColors,
    copied: false,
  },

  reducers: {
    setCopied: (state) => {
      state.copied = !state.copied;
    },
  },
});

export const { setCopied } = paletteSlice.actions;

export default paletteSlice.reducer;
