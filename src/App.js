import { useEffect, useState } from "react";
import "./index.css";
import AddNewExc from "./AddNewExc";
import RenderExcercises from "./RenderExc";
import AddSession from "./AddSession";
import RenderSession from "./RenderSession";

function App() {

  const [newDate, setNewDate] = useState("");

  // const initialTasks = [
  //   {
  //     id: 1,
  //     excercise: "planche lean",
  //     session1: {
  //       id: 1,
  //       sets: "",
  //       reps: 100,
  //       time: "",
  //       date: "2022-12-31"
  //     },
  //     session2: {
  //       id: 2,
  //       sets: "",
  //       reps: "",
  //       time: 100,
  //       date: "2023-01-01"
  //     }
  //   },
  //   {
  //     id: 2,
  //     excercise: "dips",
  //     session1: {
  //       id: 1,
  //       sets: 100,
  //       reps: "",
  //       time: 100,
  //       date: "2022-12-31"
  //     },
  //     session2: {
  //       id: 2,
  //       sets: 100,
  //       reps: 100,
  //       time: "",
  //       date: "2023-01-01"
  //     }
  //   },
  //   {
  //     id: 3,
  //     excercise: "pushups",
  //     session1: {
  //       id: 1,
  //       sets: 100,
  //       reps: "",
  //       time: "",
  //       date: "2022-12-31"
  //     },
  //     session2: {
  //       id: 2,
  //       sets: "",
  //       reps: "",
  //       time: "",
  //       date: "2023-01-01"
  //     }
  //   },
  // ];
  const downloadedWorkout = localStorage.getItem("workout");

  const [tasks, setTasks] = useState(downloadedWorkout ? JSON.parse(downloadedWorkout) : []);

  


  useEffect(()=> {
    localStorage.setItem("workout", JSON.stringify(tasks))
  }, [tasks]);

  console.log(tasks);

  return (
    <div className="layout">

      <AddNewExc
        setTasks={setTasks}
        tasks={tasks}
        newDate={newDate}
      />

      <AddSession
      tasks={tasks}
      setTasks={setTasks}
      newDate={newDate}
      setNewDate={setNewDate}
      
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
