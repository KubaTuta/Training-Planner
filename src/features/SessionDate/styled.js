import styled from "styled-components";

export const LayoutWrapper = styled.div`
  grid-area: sessionDate;
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
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MiniDateTile = styled.div`
  width: 180px;
  background-color: #47494d;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    &:hover {
      cursor: pointer;
    }
  }
`;
