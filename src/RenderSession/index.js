import "./style.css";

const RenderSession = ({ tasks, setTasks }) => {

	console.log(tasks);

	const addSets = (id) => {
		const promptValue = prompt('ile serii');
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					session: {
						...task.session,
						sets: promptValue,
					}
				}
			} else {
				return task
			}
		}
		))
	};

	const addReps = (id) => {
		const promptValue = prompt("ile powtórzeń");
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					session: {
						...task.session,
						reps: promptValue,
					}
				}
			} else {
				return task
			}
		}
		))
	};
	const addTime = (id) => {
		const promptValue = prompt("ile czasu pod napięciem");
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					session: {
						...task.session,
						time: promptValue,
					}
				}
			} else {
				return task
			}
		}
		))
	};

	const resetSets = (id) => {
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					session: {
						...task.session,
						sets: "",
					}
				}
			} else {
				return task
			}
		}
		))
	};

	const resetReps = (id) => {
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					session: {
						...task.session,
						reps: "",
					}
				}
			} else {
				return task
			}
		}
		))
	};

	const resetTime = (id) => {
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					session: {
						...task.session,
						time: "",
					}
				}
			} else {
				return task
			}
		}
		))
	};

	return (
		<div className="session">
			{tasks.map(task => {
				if (task.session.reps === "" && task.session.time === "") {
					return (
						<div
							className="session__set"
							key={task.id}
						>
							<p className="session__cell">
								Serie: {
									(task.session.sets === "") ?
										<button
											className="session__button"
											onClick={() => addSets(task.id)}
										>
											+
										</button> :
										`${task.session.sets}`
								}
								{
									(task.session.sets === "") ?
										"" :
										<button className="session__button" onClick={()=>resetSets(task.id)}>x</button>
								}
							</p>
							<p className="session__cell">
								Powtórzenia: {
									(task.session.reps === "") ?
										<button
											className="session__button"
											onClick={() => addReps(task.id)}
										>+
										</button> :
										`${task.session.reps}`
								}
							</p>
							<p className="session__cell">
								Czas: {
									(task.session.time === "") ?
										<button
											className="session__button"
											onClick={() => addTime(task.id)}
										>+</button> :
										`${task.session.time}`
								}
							</p>
						</div>
					)
				}
				else if (task.session.reps === "") {
					return (
						<div
							className="session__set"
							key={task.id}
						>
							<p className="session__cell">
								Serie: {
									(task.session.sets === "") ?
										<button className="session__button"
											onClick={() => addSets(task.id)}
										>
											+
										</button> :
										`${task.session.sets}`
								}
								{
									(task.session.sets === "") ?
										"" :
										<button className="session__button" onClick={()=>resetSets(task.id)}>x</button>
								}
							</p>
							<p className="session__cell">
								Czas: {task.session.time}s
								<button className="session__button" onClick={()=>resetTime(task.id)}>x</button>
							</p>
						</div>
					)
				}
				else {
					return (
						<div
							className="session__set"
							key={task.id}
						>
							<p className="session__cell">
								Serie: {
									(task.session.sets === "") ?
										<button className="session__button"
											onClick={() => addSets(task.id)}
										>
											+
										</button> :
										`${task.session.sets}`
								}
								{
									(task.session.sets === "") ?
										"" :
										<button className="session__button" onClick={()=>resetSets(task.id)}>x</button>
								}
							</p>
							<p className="session__cell">
								Powtórzenia: {task.session.reps}
								<button className="session__button" onClick={()=> resetReps(task.id)}>x</button>
							</p>
						</div>
					)
				}
			})}
		</div>
	)
};

export default RenderSession;