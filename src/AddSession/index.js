
const AddSession = ({ tasks, setTasks }) => {

	const addNewSession = (tasks) => {
		setTasks(tasks.map(task => (
			{
					...task,
					session3: {
						sets: "",
						reps: "",
						time: ""
					}
				}
		)
		 
					 
			
			
		))
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

