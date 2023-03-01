import "./style.css";

const AddSession = ({ tasks, setTasks }) => {

	const addNewSession = (tasks) => {
		setTasks(tasks.map(task => {
			let length = (Object.keys(task).length - 1);
			let sessionName = "session" + length;

			return {
				...task,
				[sessionName]: {
					id: length,
					sets: "",
					reps: "",
					time: ""
				}
			}
		}))
	};

	// jeśli zamienie obiekt na tablice i jeśli jej długość np.4 - value.id !== 2 to zmien nazwe session oraz id

	// const checkSessions = () => { //zwraca obiekt który oś zawiera
	// return (
	// 	tasks.find(excercise => Object.values(excercise).map(task => task = "boolean"))
	// )
	// }

	const checkSessions = () => { //to chcę osiągnąć
		return (
			tasks.map((exc) => exc = exc.id === 1))
				}
			
			
		
	


	// const checkSessions = () => { //to chcę osiągnąć
	// return (
	// 	tasks.map(({session2}) => session2)
	// )
	// }

	// const checkSessions = () => { // zwraca tablice która zawiera keys lub values(trzeba ustawić)
	// 	return (
	// 		tasks.filter(excercise =>Object.values(excercise).includes("planche lean"))
	// 	)
	// 	}

	// const checkSessions = () => { // zwraca bool
	// 	return (
	// 		tasks.map(excercise =>Object.values(excercise).includes("planche lean"))
	// 	)
	// 	}




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

