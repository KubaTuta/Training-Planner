import { call, select, takeEvery } from "redux-saga/effects";
import { saveUnitsOnLocalStorage } from "./unitLocalStorage";
import { selectUnitState } from "./unitSlice";

function* saveUnitOnLocalStorageHandler() {
  const units = yield select(selectUnitState);
  yield call(saveUnitsOnLocalStorage, units);
}

export function* unitSaga() {
  yield takeEvery("*", saveUnitOnLocalStorageHandler);
}