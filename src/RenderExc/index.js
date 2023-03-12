import "./style.css";

const RenderExcercises = ({ tasks, setTasks }) => {

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	const changeNameOfExc = (id) => {
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
		setTasks([...unsortedTasks].sort((a,b)=>a.id-b.id))
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
		setTasks([...unsortedTasks].sort((a,b)=>a.id-b.id)) 
	}

	return (

		<div className="excercises">

			{tasks.map(excercise => (
				<div
					className="excercises__excercise"
					key={excercise.id}
				>
					{excercise.excercise}
					<div>
						{
							(excercise === tasks[0])
								? ""
								: <button className="excercise__remove" onClick={() => setUp(excercise.id)}>⬆</button>
						}
						<button className="excercise__remove" onClick={() => changeNameOfExc(excercise.id)}>🔧</button>
						<button className="excercise__remove" onClick={() => removeTask(excercise.id)}>x</button>
						{
							(excercise === tasks[tasks.length - 1])
								? ""
								: <button className="excercise__remove" onClick={() => setDown(excercise.id)}>⬇</button>
						}
					</div>


				</div>
			))}
		</div>
	)
};

export default RenderExcercises;