import styled from "styled-components";

export const ConfirmationButton = styled.button`
background-color: crimson;
border: none;
transition: 0.2s;
&:hover {
  transform: scale(1.1);
  background-color: rgba(220, 20, 60, 1);
  cursor: pointer;
}
`;

export const CancelButton = styled.button`
border: none;
transition: 0.2s;
&:hover {
  transform: scale(1.1);
  cursor: pointer;
}
`;