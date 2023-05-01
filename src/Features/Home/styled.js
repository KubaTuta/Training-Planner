import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: buttons;
  background-color: transparent;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  margin: 5px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: 0.2s;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 10px 2px #253B66;
  }
`;

export const StyledList = styled.ul`
  
`;

export const StyledUnit = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  transition: 0.2s;
  background-color:  ${({active, id})=> active === id ? "orange" : "transparent"};
  padding: 20px 5px 20px 5px;
  &:hover {
    cursor: move;
    box-shadow: inset 0px 0px 10px 2px #253B66;
  }
`;