import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: date;
  background-color: transparent;
  color: white;
  min-width: 150px;
  max-width: fit-content;
  margin: 5px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;

export const MiniDateTile = styled.div`
  width: 180px;
  background-color: #323d53;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
`;