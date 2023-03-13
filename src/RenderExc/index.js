import "./style.css";

const RenderExcercises = ({ tasks, setTasks }) => {

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	const editName = (id) => {
		const newName = prompt("nowa nazwa ćwiczenia");
		setTasks(tasks.map(excercise => {
			if (excercise.id === id) {
				return {
					...excercise,
					excercise: newName,
				}
			}
			return excercise
		}))
	};

	const setUp = (id) => {
		const unsortedTasks = tasks.map(excercise => {
			if (excercise.id === id) {
				return {
					...excercise,
					id: id - 1
				}
			}
			if (excercise.id === id - 1) {
				return {
					...excercise,
					id: id
				}
			}
			return excercise
		});
		setTasks([...unsortedTasks].sort((a, b) => a.id - b.id))
	};

	const setDown = (id) => {
		const unsortedTasks = tasks.map(excercise => {
			if (excercise.id === id) {
				return {
					...excercise,
					id: id + 1
				}
			}
			if (excercise.id === id + 1) {
				return {
					...excercise,
					id: id
				}
			}
			return excercise
		});
		setTasks([...unsortedTasks].sort((a, b) => a.id - b.id))
	}

	return (

		<div className="excercises">
			{tasks.map(excercise => (
				<div
					className="excercises__excercise"
					key={excercise.id}
				>
					{
						(excercise === tasks[0])
							? ""
							: <button className="excercise__buttonUp" onClick={() => setUp(excercise.id)}></button>
					}
					<div className="excercises__content">
						{excercise.excercise}
						<div className="excercises__buttons">
							<button className="excercise__edit" onClick={() => editName(excercise.id)}>🔧</button>
							<button className="excercise__remove" onClick={() => removeTask(excercise.id)}>x</button>
						</div>
					</div>
					{
						(excercise === tasks[tasks.length - 1])
							? ""
							: <button className="excercise__buttonDown" onClick={() => setDown(excercise.id)}></button>
					}
				</div>
			))}
		</div>
	)
};

export default RenderExcercises;