import { useState } from "react";
import "./index.css";
import AddNewExc from "./Features/AddNewExc";
import RenderExcercises from "./Features/RenderExc";
import AddSession from "./Features/AddSession";
import RenderSession from "./Features/RenderSession";

function App() {

  const [newDate, setNewDate] = useState("");

  return (
    <div className="layout">
      <AddNewExc
        newDate={newDate}
      />
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
