import { createSlice } from "@reduxjs/toolkit";
import { getUnitsFromLocalStorage } from "./unitLocalStorage";

const unitSlice = createSlice({
  name: "units",
  initialState: getUnitsFromLocalStorage,
  reducers: {
    addUnit: (state, action) => {
      const newUnit = action.payload;

      if (state.length === 0) {
        return [
          {
            name: newUnit,
            id: 1,
            active: true,
            content: [],
          }
        ]
      } else {
        const lastPosition = Object.keys(state).length - 1;
        const newId = state[lastPosition].id + 1;
        return [
          ...state,
          {
            name: newUnit,
            id: newId,
            active: false,
            content: [],
          }
        ]
      }
    },
    editUnitName: (state, action) => {
      const {id, newName} = action.payload;
      return state.map(unit=>{
        if (unit.id === id) {
          return {
            ...unit,
            name: newName
          }
        } else {
          return unit
        }
      })
    },
    removeUnit: (state, action) => {
      const id = action.payload;

      state = state.filter(unit => unit.id !== id);
      return state
    },
    setActiveUnit: (state, action) => {
      const id = action.payload;
      return state.map(unit => {
        if (unit.id === id) {
          return {
            ...unit,
            active: true
          }
        } else {
          return {
            ...unit,
            active: false
          }
        }
      })
    },
    addExcercise: (state, action) => {
      const exerciseName = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active)
      const date = (new Date()).toLocaleString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\./g, '-');
      if (activeUnit) {
        if (state[activeUnit].content.length === 0) {
          state[activeUnit].content = [
            ...state[activeUnit].content,
            {
              exercise: exerciseName,
              id: 1,
              session1: {
                id: 1,
                sets: "",
                reps: "",
                time: "",
                date: date
              }
            }
          ]
        } else {
          const arrayExcercise = Object.values(state[activeUnit].content[0]);
          const lastPosition = Object.keys(state[activeUnit].content[0]).length - 1;
          const newId = arrayExcercise[lastPosition].id;
          const sessionName = "session" + newId;
          const exerciseId = state[activeUnit].content.length === 0 ? 1 : state[activeUnit].content[state[activeUnit].content.length - 1].id + 1

          state[activeUnit].content = [
            ...state[activeUnit].content,
            {
              exercise: exerciseName,
              id: exerciseId,
              [sessionName]: {
                id: newId,
                sets: "",
                reps: "",
                time: "",
                date: date
              }
            }
          ]
        }
      }
    },
    removeExercise: (state, action) => {
      const id = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active)
      state[activeUnit].content = state[activeUnit].content.filter(exercise => exercise.id !== id);
    },
    editName: (state, action) => {
      const { id, newName } = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active)
      state[activeUnit].content = state[activeUnit].content.map(exercise => {
        if (exercise.id === id) {
          return {
            ...exercise,
            exercise: newName,
          }
        }
        return exercise
      })
    },
    setUp: (state, action) => {
      const id = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      const unsortedTasks = state[activeUnit].content.map(exercise => {
        if (exercise.id === id) {
          return {
            ...exercise,
            id: id - 1
          }
        }
        if (exercise.id === id - 1) {
          return {
            ...exercise,
            id: id
          }
        }
        return exercise
      });
      state[activeUnit].content = ([...unsortedTasks].sort((a, b) => a.id - b.id))
    },
    setDown: (state, action) => {
      const id = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      const unsortedTasks = state[activeUnit].content.map(exercise => {
        if (exercise.id === id) {
          return {
            ...exercise,
            id: id + 1
          }
        }
        if (exercise.id === id + 1) {
          return {
            ...exercise,
            id: id
          }
        }
        return exercise
      });
      state[activeUnit].content = ([...unsortedTasks].sort((a, b) => a.id - b.id))
    },
    addSession: (state, action) => {
      const newDate = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      state[activeUnit].content = state[activeUnit].content.map(exercise => {
        const arrayExercise = Object.values(state[activeUnit].content[0]);
        const lastPosition = Object.keys(state[activeUnit].content[0]).length - 1;
        const newId = arrayExercise[lastPosition].id + 1;
        const sessionName = "session" + newId;

        if (Object.keys(state[activeUnit].content[0]).length < 3) {
          return {
            ...exercise,
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
          ...exercise,
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
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      const sessionName = "session" + (id);
      state[activeUnit].content = state[activeUnit].content.map(task => {
        const { [sessionName]: beingRemovedSession, ...rest } = task;
        return rest
      })
    },
    editDate: (state, action) => {
      const { id, newDate } = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      const sessionName = "session" + id;
      state[activeUnit].content = state[activeUnit].content.map(exercise => {
        return {
          ...exercise,
          [sessionName]: {
            ...exercise[sessionName],
            date: newDate,
          },
        }
      })
    },
    addActivity: (state, action) => {
      const { session, exerciseId, activity } = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      const promptValue = prompt("podaj ilość serii");
      const sessionName = "session" + (session);

      state[activeUnit].content = state[activeUnit].content.map(exercise => {
        if (exercise.id === exerciseId) {
          return {
            ...exercise,
            [sessionName]: {
              ...exercise[sessionName],
              [activity]: promptValue,
            }
          }
        }
        return exercise;
      })
    },
    removeActivity: (state, action) => {
      const { session, exerciseId, activity } = action.payload;
      const activeUnit = Object.keys(state).find(unit => state[unit].active);
      const sessionName = "session" + (session);

      state[activeUnit].content = state[activeUnit].content.map(exercise => {
        if (exercise.id === exerciseId) {
          return {
            ...exercise,
            [sessionName]:
            {
              ...exercise[sessionName],
              [activity]: "",
            }
          }
        }
        return exercise
      }
      )
    },
  }
});

export const {
  addUnit,
  editUnitName,
  removeUnit,
  setActiveUnit,
  addExcercise,
  removeExercise,
  editName,
  setUp,
  setDown,
  addSession,
  removeSession,
  editDate,
  addActivity,
  removeActivity } = unitSlice.actions;

export const selectUnitState = state => state.units;
export const selectUnitName = state => selectUnitState(state).map(unit => unit.name);
export const selectActiveName = state => {
  const activeName = selectUnitState(state).find((unit) => unit.active === true);
  return activeName ? activeName.name : null;
};
export const selectActiveContent = state => {
  const activeUnit = selectUnitState(state).find((unit) => unit.active === true);
  return activeUnit ? activeUnit.content : null;
}


export default unitSlice.reducer;