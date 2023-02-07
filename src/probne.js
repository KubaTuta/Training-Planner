import { useState } from "react";


const AddNewExc = ({ setTasks, newDate, setDate }) => {

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

	
	

	console.log(newDate);
	const AddNewExc = (newTask, newSets, newReps, newTime) => {
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
		setNewRepsBool(newRepsBool => !newRepsBool);

		setNewTimeBool(false);
	};

	const handleTimeChange = () => {
		setNewTimeBool(newTimeBool => !newTimeBool);
		setNewRepsBool(false);
	};

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();
		AddNewExc(newTask, newSets, newReps, newTime);
		setNewTask("");
		setNewSets("");
	
		setNewReps("");
		setNewTime("");
		setAmount("");

	});

	return (

		<div className="buttons ">
			<form onSubmit={onFormSubmit}>
				<p>
					<input value={newDate}
						type="date"
						onChange={({ target }) => setDate(target.value)} />
				</p>
				<p>
					<input
						placeholder="nazwa ćwiczenia"
						required={true}
						value={newTask}
						onChange={({ target }) => { setNewTask(target.value) }}
					/>
				</p>
				<p>
					<input
						type="number"
						placeholder="ilość serii"
						min="0"
						step="1"
						required={true}
						value={newSets}
						onChange={({ target }) => { setNewSets(target.value) }}
					/>
				</p>
				<p>
					<input
						type="radio"
						required={true}
						name="repsOrTime"
						onChange={handleRepChange}
					/>
					Powtórzenia
				</p>
				<p>

					<input
						type="radio"
						min="0"
						step="1"
						required={true}
						name="repsOrTime"
						onChange={handleTimeChange}
					/>
					Czas pod napięciem
				</p>
				<p>

					<input
						type="number"
						min="0"
						step="1"
						required={true}
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

export default AddNewExc;
