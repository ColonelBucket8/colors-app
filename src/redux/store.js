import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import paletteSlice from "./palette/palette.slices";

export default configureStore({
  reducer: {
    palette: paletteSlice,
  },
  middleware: [logger],
});
