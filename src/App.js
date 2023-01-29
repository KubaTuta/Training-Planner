import { useState } from "react";
import "./index.css"; 
import AddNewTask from "./AddNewTask";
import Excercises from "./Excercises";
import SetsReps from "./SetsReps";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 2,
      excercise: "planche lean",
      sets: 3,
      reps: "",
      time: 30,
    },
    {
      id: 3,
      excercise: "dips",
      sets: 2,
      reps: 10,
      time: "",
    },
    {
      id: 4,
      excercise: "pullups",
      sets: 4,
      reps: 5,
      time: "",
    },
    {
      id: 5,
      excercise: "l-sit",
      sets: 3,
      reps: "",
      time: 15,
    },
  ]);

  
  
  

  return (
    <div className="layout">
      <AddNewTask
      setTasks={setTasks} 
      tasks={tasks}
     
      />
      <Excercises 
     tasks={tasks}
     setTasks={setTasks}
     
      />
      <SetsReps 
      tasks={tasks}
     
      />
    </div>

  );
}

export default App;
