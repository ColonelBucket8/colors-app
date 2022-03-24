import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import paletteSlice from "./palette/palette.slices";

const rootReducers = combineReducers({
  palette: paletteSlice,
});

export default configureStore({
  reducer: rootReducers,
  middleware: [logger],
});
