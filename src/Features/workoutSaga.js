import { call, select, takeEvery } from "redux-saga/effects";
import { saveWorkoutOnLocalStorage } from "./workoutLocalStorage";
import { selectWorkouts } from "./workoutSlice";

function* saveWorkoutOnLocalStorageHandler() {
  const workout = yield select(selectWorkouts);
  yield call(saveWorkoutOnLocalStorage, workout);
}

export function* workoutSaga() {
  yield takeEvery("*", saveWorkoutOnLocalStorageHandler);
}