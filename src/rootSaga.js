import { all } from "redux-saga/effects";
import { unitSaga } from "./features/Home/unitSaga";

export default function* rootSaga() {
  yield all([
    unitSaga(),
  ])
};