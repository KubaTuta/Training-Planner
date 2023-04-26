export const saveUnitsOnLocalStorage = units =>
  localStorage.setItem("units", JSON.stringify(units));

export const getUnitsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("units")) || [];