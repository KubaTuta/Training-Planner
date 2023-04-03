import { useState } from "react";
import "./index.css";
import AddNewExc from "./Features/AddNewExc";
import RenderExcercises from "./Features/RenderExc";
import RenderSession from "./Features/RenderSession";
import AddSession from "./Features/AddSession";
import Date from "./Features/SessionDate";

function App() {

  const [newDate, setNewDate] = useState("");

  return (
    <div className="layout">
      <AddNewExc
        newDate={newDate}
      />
      <Date />
      <AddSession
        newDate={newDate}
        setNewDate={setNewDate}
      />
      <RenderExcercises />
      <RenderSession />
    </div>

  );
}

export default App;
