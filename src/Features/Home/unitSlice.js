import { createSlice } from "@reduxjs/toolkit";
import { getUnitFromLocalStorage } from "./unitLocalStorage";

const unitSlice = createSlice({
  name: "units",
  initialState: getUnitFromLocalStorage,
  reducers: {
    addUnit: (state, action) => {
      const newUnit = action.payload;
      const number = Object.keys(state).length + 1;
      if (state.length === 0) {
        return [
          {
            name: newUnit,
            id: 1,
            active: true,
            content: [],
          }
        ]
      } else return [
        ...state,
        {
          name: newUnit,
          id: number,
          active: false,
          content: [],
        }
      ]
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
  }
});

export const { addUnit, setActiveUnit, addExcercise } = unitSlice.actions;

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