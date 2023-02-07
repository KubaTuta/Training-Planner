import { useState } from "react";
import "./index.css";
import AddNewExc from "./AddNewExc";
import RenderExcercises from "./RenderExc";
import AddSession from "./AddSession";
import RenderSession from "./RenderSession";

function App() {
  
const initialTasks = [
  {
    id: 1,
    excercise: "planche lean",
    session: {sets: 99,
              reps: "",
              time: 500,}
  },
  {
    id: 2,
    excercise: "dips",
    session: {sets: 100,
              reps: 300,
              time: "",}
  },
  {
    id: 3,
    excercise: "dips",
    session: {sets: "",
              reps: "",
              time: "",}
  },
];

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="layout">
      
      <AddNewExc
        setTasks={setTasks}
        tasks={tasks}
      />
      
      <AddSession
      />

      <RenderExcercises
        tasks={tasks}
        setTasks={setTasks}

      />
      <RenderSession
        tasks={tasks}
        setTasks={setTasks}

      />
    </div>

  );
}

export default App;
