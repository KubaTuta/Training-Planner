import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: rgba(220, 20, 60, 0.733);
  color: white;
  border: none;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px 0px rgba(89, 15, 8, 0.86);
  border-radius: 3px;
  &:hover {
    transform: scale(1.1);
    background-color: rgba(220, 20, 60, 1);
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  color: white;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalTile = styled.div`
  width: 500px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #3B568C;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const NavWrapper = styled.div`
  background-color: black;
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 0;
  height: 40px;
`;

export const NavList = styled.li`
  list-style-type: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    font-weight: 600;
  }
`;