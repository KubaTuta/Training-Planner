
import "./style.css";

const AddSession = ({ tasks, setTasks, newDate, setNewDate }) => {

	const addNewSession = (tasks) => {
		setTasks(tasks.map(excercise => {
			const arrayExcercise = Object.values(tasks[0]);
			const lastPosition = Object.keys(tasks[0]).length - 1;
			const newId = arrayExcercise[lastPosition].id + 1;
			const sessionName = "session" + newId;

			if (Object.keys(tasks[0]).length < 3) {
				return {
					...excercise,
					session1: {
						id: 1,
						sets: "",
						reps: "",
						time: "",
						date: newDate,
					}
				}
			}
			return {
				...excercise,
				[sessionName]: {
					id: newId,
					sets: "",
					reps: "",
					time: "",
					date: newDate,
				}
			}
		}))
	};

	const removeSession = (id) => {
		const sessionName = "session" + (id);
		setTasks(tasks.map(task => {
			const { [sessionName]: beingRemovedSession, ...rest } = task;
			return rest
		}))
	};

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();
		addNewSession(tasks);
	});

	if (tasks.length === 0) {
		return null
	}

	return (
		<div className="date">
			<div className="core">
				<form className="session__form" onSubmit={onFormSubmit}>
					<div>
						<input
						type="date"
						required={true}
						value={newDate}
						onChange={({target})=> setNewDate(target.value)}
					>
					</input>
					</div>
					<div>
							<button className="addBut"
						type="submit"
					>
						Dodaj
					</button>
					</div>
					
				
				</form>
			</div>
			<div className="date__singleDate">
				{Object.values(tasks[0]).map((value) => {
					if (typeof value === "object") {
						return (
							<div className="date__session" key={value.id}>
								{value.date} <button className="butt" onClick={() => removeSession(value.id)} >x</button>
							</div>
						)
					}
					else return null
				})
				}
			</div>
		</div>

	)
}
	;

export default AddSession;

