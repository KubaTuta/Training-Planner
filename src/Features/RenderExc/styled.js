import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: excercises;
  position: sticky;
  left: 0;
`;

export const Tile = styled.div`
  background-color: #202F4D;
  color: white;
  cursor: move;
  min-height: 100px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px -1px 5px 0px rgb(79 51 112 / 24%);
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  word-break: break-word;
  &:hover {
    background-color: rgb(16 1 5 / 40%);
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const EditButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: teal;
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
    background-color: teal;
    cursor: pointer;
  }
`;