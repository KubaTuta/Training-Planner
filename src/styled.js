import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
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
  background-color: #29292a;
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
  padding: 0;
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