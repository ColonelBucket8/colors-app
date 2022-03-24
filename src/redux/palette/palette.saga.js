import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import findPalette from "./palette.slices";

function* fetchPalettes(action) {
  try {
    const palettes = yield call();
  } catch (error) {
    console.log(error);
  }
}

function* mySaga() {
  yield takeLatest(findPalette, fetchPalettes);
}

export default mySaga;
