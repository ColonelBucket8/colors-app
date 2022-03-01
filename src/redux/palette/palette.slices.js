import { createSlice } from "@reduxjs/toolkit";
import seedColors from "../../seedColors";

export const paletteSlice = createSlice({
  name: "palette",
  initialState: {
    palettes: seedColors,
    level: 500,
  },

  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { setCopied, setLevel } = paletteSlice.actions;

export default paletteSlice.reducer;
