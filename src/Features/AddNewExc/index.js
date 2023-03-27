import { useState } from "react";
import "./style.css";
import { addExcercise } from "../workoutSlice";
import { useDispatch } from "react-redux";


const AddNewExc = ({ tasks, setTasks, newDate }) => {

	const dispatch = useDispatch();
	const [newTask, setNewTask] = useState("");

	const AddNewExc = (newTask) => {
		if (tasks.length === 0) {
			const date = (new Date()).toLocaleString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\./g, '-');
			setTasks(tasks => {
				return [
					...tasks,
					{
						id: 1,
						excercise: newTask,
						session1: {
							id: 1,
							sets: "",
							reps: "",
							time: "",
							date: date
						}
					}
				]
			})
		}
		else {
			setTasks(tasks => {
				const arrayExcercise = Object.values(tasks[0]);
				const lastPosition = Object.keys(tasks[0]).length - 1;
				const newId = arrayExcercise[lastPosition].id;
				const sessionName = "session" + newId;

				return [
					...tasks,
					{
						id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
						excercise: newTask,
						[sessionName]: {
							id: newId,
							sets: "",
							reps: "",
							time: "",
							date: tasks[0][sessionName].date,
						}
					}]
			});
		}
	};

	// const onFormSubmit = ("submit", (event) => {
	// 	event.preventDefault();
	// 	AddNewExc(newTask);
	// 	setNewTask("");

	// });

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();
		
		newTask.trim().length > 0 && dispatch(addExcercise(newTask.trim()));
		setNewTask("");
	});

	return (

		<div className="buttons ">
			<button onClick={()=>dispatch(addExcercise("przysiad"))}>dodaj zadanie</button>
			<form className="add__exc" onSubmit={onFormSubmit}>
				<div>
					<input
						placeholder=" nazwa ćwiczenia"
						required={true}
						value={newTask}
						onChange={({ target }) => setNewTask(target.value)}
					/>
				</div>
				<div>
					<button className="addButton" type="submit">
						+
					</button>
				</div>

			</form>
		</div >
	);
};

export default AddNewExc;
