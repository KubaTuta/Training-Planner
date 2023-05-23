import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUnitState } from "./features/Home/unitSlice";
import Workout from "./features/workout";
import Home from "./features/Home";
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