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
      exc: "planche lean",
      session1: {
        id: 1,
        sets: "",
        reps: 100,
        time: "",
      },
      session2: {
        id: 2,
        sets: "",
        reps: "",
        time: 100
      }
    },
    {
      id: 2,
      exc: "dips",
      session1: {
        id: 1,
        sets: 100,
        reps: "",
        time: 100,
      },
      session2: {
        id: 2,
        sets: 100,
        reps: 100,
        time: ""
      }
    },
    {
      id: 3,
      exc: "pushups",
      session1: {
        id: 1,
        sets: 100,
        reps: "",
        time: "",
      },
      session2: {
        id: 2,
        sets: "",
        reps: "",
        time: ""
      }
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  console.log(tasks);

  return (
    <div className="layout">

      <AddNewExc
        setTasks={setTasks}
        tasks={tasks}
      />

      <AddSession
      tasks={tasks}
      setTasks={setTasks}
      
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
