import { useState } from "react";


const AddNewExc = ({ setTasks, newSets }) => {

	const [newTask, setNewTask] = useState("");

	const AddNewExc = (newTask) => {
		setTasks(tasks => [
			...tasks,
			{
				id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
				excercise: newTask,
				session: {
					sets: "",
					reps: "",
					time: "",
				}
			}
		]
		);
	};

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();
		AddNewExc(newTask);
		setNewTask("");

	});

	return (

		<div className="buttons ">
			<form onSubmit={onFormSubmit}>
				<p>
					<input
						placeholder="nazwa ćwiczenia"
						required={true}
						value={newTask}
						onChange={({ target }) => { setNewTask(target.value) }}
					/>
				</p>
				<p>
					<button type="submit">
						dodaj zadanie
					</button>
				</p>

			</form>
		</div >
	);
};

export default AddNewExc;
