import { all } from "redux-saga/effects";
import { unitSaga } from "./Features/Home/unitSaga";

export default function* rootSaga() {
  yield all([
    unitSaga(),
  ])
};