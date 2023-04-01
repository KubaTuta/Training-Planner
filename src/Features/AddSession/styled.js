import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: date;
  background-color: #202F4D;
  color: white;
  min-width: 150px;
  max-width: fit-content;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px -1px 5px 0px rgb(16 1 5 / 10%);
  transition: 0.5s;
  &:hover {
  background-color: rgb(16 1 5 / 40%);
  }
`;

export const StyledForm = styled.form`
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 15px;
  margin-left: 24px;
`;

export const AddButton = styled.button`
  background-color: #151F33;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

export const SessionDate = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;

export const MiniDateTile = styled.div`
  width: 180px;
  background-color: #323d53;
  display: flex;
  justify-content: space-around;
  padding: 3px;
  border-radius: 10px;
`;