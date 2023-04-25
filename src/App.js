import "./index.css";
import Workout from "./Features/workout";
import { Route, Routes } from "react-router-dom";
import Home from "./Features/Home";
import { NavList, NavWrapper, Navbar, StyledNavLink } from "./styled";

function App() {
  return (
    <>
      <NavWrapper>
        <Navbar>
          <NavList>
            <StyledNavLink to="/">
              Home
            </StyledNavLink>
          </NavList>
          <NavList>
            <StyledNavLink to="/workout">
              Workout
            </StyledNavLink>
          </NavList>
        </Navbar>
      </NavWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </>
  );
}

export default App;