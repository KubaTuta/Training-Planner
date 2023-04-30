import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: excercises;
  position: sticky;
  left: 0;
`;

export const Tile = styled.div`
  background-color: ${(props)=>props.bgColor};
  color: white;
  cursor: move;
  min-height: 100px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px -1px 5px 0px rgb(79 51 112 / 24%);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:first-child {
    padding-top: 17%;
  };
  &:last-child {
    justify-content: flex-start;
    gap: 20px;
  };
 
  /* &:hover {
    background-color: rgb(16 1 5 / 40%);
  } */
`;

export const Exercise = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  height: auto;
  padding-top: auto;
  padding-bottom: auto;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const UpButton = styled.button`
  background-color: rgb(16 25 44);
  border: none;
  width: 100%;
  height: 10px;
  border-radius: 10px 10px 0 0;
  transition: 0.2s;
  align-self: center;
  padding: 0;
  &:hover {
    cursor: pointer;
    background-color: teal;
  }
`;

export const DownButton = styled.button`
  background-color: rgb(16 25 44);
  border: none;
  width: 100%;
  height: 10px;
  border-radius: 0 0 10px 10px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: teal;  
  }
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