import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 5px;
  grid-template-areas:
    "buttons . date"
    "excercises addDate session";
  width: 100%;
  height: 100%;
`;

export const EditButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: #29292a;
  color: white;
  border: none;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px 0px rgba(89, 15, 8, 0.86);
  border-radius: 3px;
  padding: 2px;
  &:hover {
    transform: scale(1.1);
    background-color: #000000;
    cursor: pointer;
  }
  `;

export const RemoveButton = styled.button`
width: 20px;
height: 20px;
background-color: rgba(220, 20, 60, 0.733);
color: white;
border: none;
transition: 0.5s;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 1px 1px 5px 0px rgba(89, 15, 8, 0.86);
border-radius: 3px;
&:hover {
  transform: scale(1.1);
  background-color: rgba(220, 20, 60, 1);
  cursor: pointer;
}
`;