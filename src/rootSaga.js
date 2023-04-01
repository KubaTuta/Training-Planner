import { all } from "redux-saga/effects";
import { workoutSaga } from "./Features/workoutSaga";

export default function* rootSaga() {
  yield all([
    workoutSaga(),
  ])
};