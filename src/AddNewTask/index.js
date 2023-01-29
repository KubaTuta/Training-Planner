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

	const repsOrTime = () => {
		if (newRepsBool === true) {
			return setNewReps(amount)
		}
		else {
			return setNewTime(amount)
		}
	};


	const AddNewTask = (newTask, newSets, newReps, newTime) => {
		setTasks(tasks => [
			...tasks,
			{
				id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
				excercise: newTask,
				sets: newSets,
				reps: newReps,
				time: newTime,
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
		repsOrTime();
		AddNewTask(newTask, newSets, newReps, newTime);
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
						placeholder="ilość serii"
						value={newSets}
						onChange={({ target }) => { setNewSets(target.value) }}
					/>
				</p>
				<p>
					<input type="radio"
						name="repsOrTime"
						value={newRepsBool}
						onChange={handleRepChange}
					/>
					Powtórzenia
					<p>
						
						<input
							type="radio"
							name="repsOrTime"
							value={newTimeBool}
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

				</p>
				<p>
					<button type="submit">
						dodaj zadanie
					</button>
				</p>

			</form>
		</div>

	);
};


export default AddNewTask;