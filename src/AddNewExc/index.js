import { useState } from "react";
import "./style.css";



const AddNewExc = ({ tasks, setTasks }) => {

	const [newTask, setNewTask] = useState("");

	const AddNewExc = (newTask) => {
		if (tasks.length === 0) {
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
				}
			}
		]}
		);
		}

		
	};

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();
		AddNewExc(newTask);
		setNewTask("");

	});

	return (

		<div className="buttons ">
			<form className="add__exc" onSubmit={onFormSubmit}>
				<div>
					<input
						placeholder=" nazwa ćwiczenia"
						required={true}
						value={newTask}
						onChange={({ target }) => { setNewTask(target.value) }}
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
