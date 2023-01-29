const SetsReps = ({ tasks }) => (
		<div className="sets">
			{tasks.map(task => {
				if (task.reps !== "") {
					return (
						<div
							className="sets__set"
							key={task.id}
						>
							Serie: {task.sets} <br />
							Powtórzenia: {task.reps}
						</div>
					)
				}
				else {
					return (
						<div
							className="sets__set"
							key={task.id}
						>
							Serie: {task.sets} <br />
							Czas: {task.time} s
						</div>
					)
				}
			})}
		</div>
	)
;

export default SetsReps;