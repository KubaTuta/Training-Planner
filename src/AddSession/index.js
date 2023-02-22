
const AddSession = ({ tasks, setTasks }) => {

	const addNewSession = (tasks) => {
		setTasks(tasks.map(task => {
			let sessionName = "session" + (Object.keys(task).length - 1);

			return {
				...task,
				[sessionName]: {
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

