import "./style.css";

const RenderExcercises = ({ tasks, setTasks }) => {

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	return (
	
		<div className="excercises">

			{tasks.map(excercise => (
				<div
					className="excercises__excercise"
					key={excercise.id}
				>
					{excercise.excercise}
					<button onClick={() => removeTask(excercise.id)}>🗑</button>
				</div>
			))}
		</div>
	)	
};

export default RenderExcercises;