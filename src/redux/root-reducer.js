import { combineReducers } from "redux";
import paletteReducer from "./palette/palette.slices";

export default combineReducers({
  palette: paletteReducer,
});
