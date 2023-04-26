import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 5px;
  grid-template-areas:
    "buttons . date"
    "excercises addDate session";
  width: 100%;
  height: 100%;
`;