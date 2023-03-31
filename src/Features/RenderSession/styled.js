import styled from "styled-components";

export const SessionContainer = styled.div`
  grid-area: session;
  display: flex;
  flex-direction: column;
`;

export const Excercise = styled.div`
  display: flex;
  height: 100px;
  margin-bottom: 5px;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

export const SessionTile = styled.div`
  background-color: #202F4D;
  color: white;
  height: 100px;
  width: 180px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px -1px 5px 0px rgb(16 1 5 / 10%);
  transition: 0.5s;
  list-style-type: none;
  padding: 5px;
  &:hover {
    background-color: rgb(16 1 5 / 30%);
  }
`;

export const Activity = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 5px;

`;

export const PlusButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: teal;
  color: white;
  border: none;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px 0px rgba(28, 47, 107, 0.86);
  border-radius: 3px;
  &:hover {
    transform: scale(1.1);
    background-color: rgb(1, 109, 109);
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