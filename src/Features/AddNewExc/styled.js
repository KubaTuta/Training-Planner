import styled from "styled-components";
import {ReactComponent as plus} from "./plus.svg";

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
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Plus = styled(plus)`
  fill: #202F4D;
`;

