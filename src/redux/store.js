import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import paletteSlice from "./palette/palette.slices";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["palette"],
};

const palettePersistConfig = {
  key: "palette",
  storage,
  whitelist: ["palettes"],
};

const reducers = combineReducers({
  palette: persistReducer(palettePersistConfig, paletteSlice),
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});
