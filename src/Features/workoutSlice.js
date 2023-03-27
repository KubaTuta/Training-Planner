import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    tasks: "",
  },
  reducers: {
    addExcercise: (state, action) => {
      const newTask  = action.payload;

      if (state.tasks.length === 0) {

        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: 1,
              excercise: newTask,
              session1: {
                id: 1,
                sets: "",
                reps: "",
                time: "",
                
              },
            },
          ],
        };
      } else {
        const arrayExcercise = Object.values(state.tasks[0]);
        const lastPosition = Object.keys(state.tasks[0]).length - 1;
        const newId = arrayExcercise[lastPosition].id;
        const sessionName = "session" + newId;

        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: state.tasks.length === 0 ? 1 : state.tasks[state.tasks.length - 1].id + 1,
              excercise: newTask,
              [sessionName]: {
                id: newId,
                sets: "",
                reps: "",
                time: "",
                
              }
            }]
        }

          ;
      }
    }
  }
});

export const { countTasks, addExcercise } = workoutSlice.actions;

export const selectWorkoutsState = state => state.workouts;
export const selectWorkouts = state => selectWorkoutsState(state).workout;
console.log(selectWorkoutsState);

export default workoutSlice.reducer;