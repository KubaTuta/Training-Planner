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
    box-shadow: inset 0px 0px 10px 2px #253b66;
  }
`;

export const StyledList = styled.ul`
  min-width: 400px;
  max-width: 500px;
`;

export const StyledUnit = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-wrap: break-all;
  list-style-type: none;
  transition: 0.2s;
  background-color: ${({ active, id }) =>
    active === id ? "orange" : "transparent"};
  padding: 20px 5px 20px 5px;
  box-shadow: ${({ toSpot, id }) =>
    toSpot === id ? "inset 5px 5px 10px 5px #253B99" : "transparent"};
  &:hover {
    cursor: move;
    box-shadow: inset 0px 0px 10px 2px #253b66;
  }
`;
