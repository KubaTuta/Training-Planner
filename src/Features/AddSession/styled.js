import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: addDate;
  background-color: #47494d;
  color: white;
  min-width: 20px;
  max-width: fit-content;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px -1px 5px 0px rgb(16 1 5 / 10%);
  transition: 0.5s;
  &:hover {
  background-color: rgb(16 1 5 / 40%);
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;  
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: rgb(16 1 5 / 40%);
    cursor: pointer;
  }
`;