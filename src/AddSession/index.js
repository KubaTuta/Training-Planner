import "./style.css";

const AddSession = ({ tasks, setTasks }) => {

	const addNewSession = (tasks) => {
		setTasks(tasks.map(excercise => {
			let arrayExcercise = Object.values(excercise);
			let lastPosition = Object.keys(excercise).length - 1;
			let newId = arrayExcercise[lastPosition].id + 1;
			let sessionName = "session" + newId;

			return {
				...excercise,
				[sessionName]: {
					id: newId,
					sets: "",
					reps: "",
					time: ""
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

	return (
		<div className="date">
			<div>
				<p>
					dodaj sesję
				</p>
				<p>
					<button
						onClick={() => addNewSession(tasks)}
					>
						Dodaj
					</button>
					<button onClick={() => console.log(checkSessions())}>fix</button>
				</p>
			</div>
			<div className="date__singleDate">
				{Object.values(tasks[0]).map((value) => {
					if (typeof value === "object") {
						return (
							<div className="date__session" key={value.id}>
								data sesji <button className="butt" onClick={() => removeSession(value.id)} >x</button>
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

