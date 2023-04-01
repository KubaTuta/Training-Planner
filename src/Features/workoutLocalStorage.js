export const saveWorkoutOnLocalStorage = workout =>
  localStorage.setItem("workout", JSON.stringify(workout));

export const getWorkoutFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("workout")) || [];