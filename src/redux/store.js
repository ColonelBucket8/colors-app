import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import paletteSlice from "./palette/palette.slices";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    palette: paletteSlice,
  },
});
