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
      session: {
        id: 1,
        sets: 99,
        reps: "",
        time: 500,
      },
      session2: {
        id: 2,
        sets: "xxx",
        reps: "",
        time: "zzz"
      }
    },
    {
      id: 2,
      excercise: "dips",
      session: {
        id: 1,
        sets: 100,
        reps: 300,
        time: "",
      },
      session2: {
        id: 2,
        sets: "xxx",
        reps: "",
        time: "zzz"
      }
    },
    {
      id: 3,
      excercise: "dips",
      session: {
        id: 1,
        sets: "",
        reps: "",
        time: "",
      },
      session2: {
        id: 2,
        sets: "xxx",
        reps: "",
        time: "zzz"
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
