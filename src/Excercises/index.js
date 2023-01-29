const Excercises = ({ tasks, setTasks }) => {

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	return (
		<div className="excercises">

			{tasks.map(task => (
				<div
					className="excercises__excercise"
					key={task.id}
				>
					{task.excercise}
					<button onClick={() => removeTask(task.id)}>🗑</button>
				</div>
			))}
		</div>
	)
};

export default Excercises;