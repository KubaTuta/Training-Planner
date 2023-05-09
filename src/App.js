import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUnitState } from "./Features/Home/unitSlice";
import Workout from "./Features/workout";
import Home from "./Features/Home";
import { NavList, NavWrapper, Navbar, StyledNavLink } from "./styled";

function App() {
  const content = useSelector(selectUnitState);

  return (
    <>
      <NavWrapper>
        <Navbar>
          <NavList>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavList>
          {content.length !== 0 ? (
            <NavList>
              <StyledNavLink to="/workout">Workout</StyledNavLink>
            </NavList>
          ) : null}
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