import { useState } from "react";


const AddNewTask = ({ setTasks, tasks }) => {

	const [newTask, setNewTask] = useState("");
	const [newSets, setNewSets] = useState("");
	const [newRepsBool, setNewRepsBool] = useState(false);
	const [newTimeBool, setNewTimeBool] = useState(false);
	const [newReps, setNewReps] = useState("");
	const [newTime, setNewTime] = useState("");
	const [amount, setAmount] = useState("");

	console.log(`wartość powtórzeń: ${newRepsBool}`);
	console.log(`wartość czasu: ${newTimeBool}`);
	console.log(`reps: ${newReps}`);
	console.log(`time: ${newTime}`);
	console.log(`amount: ${amount}`);


	const AddNewTask = (newTask, newSets, newReps, newTime) => {
		setTasks(tasks => [
			...tasks,
			{
				id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
				excercise: newTask,
				sets: newSets,
				reps: newRepsBool ? amount : "",
				time: newTimeBool ? amount : "",
			}
		]
		);
	};

	const handleRepChange = () => {
		setNewRepsBool(true);
		setNewTimeBool(false);
	};

	const handleTimeChange = () => {
		setNewTimeBool(true)
		setNewRepsBool(false);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		AddNewTask(newTask, newSets, newReps, newTime);
		setNewTask("");
		setNewSets("");
		setNewRepsBool(false);
		setNewTimeBool(false);
		setNewReps("");
		setNewTime("");
		setAmount("");
	};

	return (

		<div className="buttons ">
			<form onSubmit={onFormSubmit}>
				<p>
					<input
						placeholder="nazwa ćwiczenia"
						value={newTask}
						onChange={({ target }) => { setNewTask(target.value) }}
					/>
				</p>
				<p>
					<input
					type="number"
						placeholder="ilość serii"
						value={newSets}
						onChange={({ target }) => { setNewSets(target.value) }}
					/>
				</p>
				<p>
					<input type="radio"
						name="repsOrTime"

						onChange={handleRepChange}
					/>
					Powtórzenia
				</p>
				<p>

					<input
						type="radio"
						name="repsOrTime"
						onChange={handleTimeChange}
					/>
					Czas pod napięciem
				</p>
				<p>

					<input
						type="number"
						placeholder="ilość"
						value={amount}
						onChange={(event) => { setAmount(event.target.value); }}
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


export default AddNewTask;