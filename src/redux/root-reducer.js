import { combineReducers } from "redux";
import paletteReducer from "./palette/palette.reducer";

export default combineReducers({
  palette: paletteReducer,
});
