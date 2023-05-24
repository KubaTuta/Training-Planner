import styled from "styled-components";
import wallpaper from "../../common/img/wall.png";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 500;
  background-image: url(${wallpaper});
  background-attachment: fixed;
  position: absolute;
  top: 30px;
  left: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tile = styled.div`
  background-color: rgb(71, 73, 77);
  color: white;
  min-height: 30px;
  width: 180px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px -1px 5px 0px rgb(79 51 112 / 24%);
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  word-break: break-word;
`;
