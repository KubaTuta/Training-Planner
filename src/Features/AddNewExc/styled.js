import styled from "styled-components";
import {ReactComponent as plus} from "./plus.svg";

export const LayoutWrapper = styled.div`
  grid-area: buttons;
  background-color: rgba(0, 128, 128, 0.267);
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100%;
  background-color: #202F4D;
  color: white;
  margin: 5px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(16 1 5 / 40%);
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Plus = styled(plus)`
  fill: teal;
`;

