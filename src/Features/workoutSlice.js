import { createSlice } from "@reduxjs/toolkit";
import { getWorkoutFromLocalStorage } from "./workoutLocalStorage";

const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    tasks: getWorkoutFromLocalStorage(),
  },
  reducers: {
    addExcercise: (state, action) => {
      const newTask = action.payload;
      const date = (new Date()).toLocaleString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\./g, '-');
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
                date: date,

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
                date: date,

              }
            }]
        }

          ;
      }
    },
    removeExcerise: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    editName: (state, action) => {
      const id = action.payload;
      const newName = prompt("nowa nazwa ćwiczenia");
      state.tasks = state.tasks.map(excercise => {
        if (excercise.id === id) {
          return {
            ...excercise,
            excercise: newName,
          }
        }
        return excercise
      })
    },
    setUp: (state, action) => {
      const id = action.payload;
      const unsortedTasks = state.tasks.map(excercise => {
        if (excercise.id === id) {
          return {
            ...excercise,
            id: id - 1
          }
        }
        if (excercise.id === id - 1) {
          return {
            ...excercise,
            id: id
          }
        }
        return excercise
      });
      state.tasks = ([...unsortedTasks].sort((a, b) => a.id - b.id))
    },
    setDown: (state, action) => {
      const id = action.payload;
      const unsortedTasks = state.tasks.map(excercise => {
        if (excercise.id === id) {
          return {
            ...excercise,
            id: id + 1
          }
        }
        if (excercise.id === id + 1) {
          return {
            ...excercise,
            id: id
          }
        }
        return excercise
      });
      state.tasks = ([...unsortedTasks].sort((a, b) => a.id - b.id))
    },
    addSession: (state, action) => {
      const newDate = action.payload;
      state.tasks = state.tasks.map(excercise => {
        const arrayExcercise = Object.values(state.tasks[0]);
        const lastPosition = Object.keys(state.tasks[0]).length - 1;
        const newId = arrayExcercise[lastPosition].id + 1;
        const sessionName = "session" + newId;

        if (Object.keys(state.tasks[0]).length < 3) {
          return {
            ...excercise,
            session1: {
              id: 1,
              sets: "",
              reps: "",
              time: "",
              date: newDate,
            }
          }
        }
        return {
          ...excercise,
          [sessionName]: {
            id: newId,
            sets: "",
            reps: "",
            time: "",
            date: newDate,
          }
        }
      })


    },
    removeSession: (state, action) => {
      const id = action.payload;
      const sessionName = "session" + (id);
      state.tasks = state.tasks.map(task => {
        const { [sessionName]: beingRemovedSession, ...rest } = task;
        return rest
      })
    },
    addActivity: (state, action) => {
      const { session, excerciseId, activity } = action.payload;
      const promptValue = prompt("podaj ilość serii");
      const sessionName = "session" + (session);

      state.tasks = state.tasks.map(excercise => {
        if (excercise.id === excerciseId) {
          return {
            ...excercise,
            [sessionName]: {
              ...excercise[sessionName],
              [activity]: promptValue,
            }
          }
        }
        return excercise;
      })
    },
    removeActivity: (state, action) => {
      const { session, excerciseId, activity } = action.payload;
      const sessionName = "session" + (session);
      console.log(session);
      state.tasks = state.tasks.map(excercise => {
        if (excercise.id === excerciseId) {
          return {
            ...excercise,
            [sessionName]:
            {
              ...excercise[sessionName],
              [activity]: "",
            }
          }
        }
        return excercise
      }
      )
    },
  }
});

export const { 
  addExcercise, 
  removeExcerise, 
  editName, 
  setUp,
  setDown,
  addSession, 
  removeSession, 
  addActivity, 
  removeActivity 
} = workoutSlice.actions;

export const selectWorkoutsState = state => state.workout;
export const selectWorkouts = state => selectWorkoutsState(state).tasks;
export default workoutSlice.reducer;