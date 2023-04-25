export const saveUnitOnLocalStorage = units =>
  localStorage.setItem("units", JSON.stringify(units));

export const getUnitFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("units")) || [];