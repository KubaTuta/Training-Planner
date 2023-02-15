
const AddSession = ({ tasks, setTasks }) => {

	const addNewSession = (tasks) => {
		setTasks(tasks.map(task => {
			let sessionLength = "session" + (Object.keys(tasks[0]).length - 1);

			return {
				...task,
				[sessionLength]: {
					sets: "",
					reps: "",
					time: ""
				}
			}
		}))
	};

	return (
		<div className="date">
			<p>
				dodaj sesję
			</p>
			<p>
				<button
					onClick={() => addNewSession(tasks)}
				>
					Dodaj
				</button>
			</p>
		</div>
	)
}
	;

export default AddSession;

