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
		<div className="session" >
			{tasks.map(task => (
					<div className="session__seti" key={task.id}>
						{Object.values(task).map((value) => {
							if (typeof value === "object") {
								return (
									<div className="session__set" key={value.id}>
										{Object.entries(value).map(([activity, amount]) => {
											console.log(`${activity}:${amount}`);
											if ((activity === "sets") && (amount !== "")) {
												return (
													<div className="session__cell" key={activity.id}>
														{activity}: {amount} 	<button className="session__button" onClick={() => resetSets(task.id)}>x</button>
													</div>
												)
											}
											if ((activity === "sets") && (amount === "")) {
												return (
													<div className="session__cell" key={activity.id}>
														{activity}: {amount}	<button className="session__button2" onClick={() => resetSets(task.id)}>+</button>
													</div>)
											}






											if ((activity === "reps") && (amount !== "") ) {
												return (
													<div className="session__cell" key={activity.id}>
														powtórzenia: {amount} 	<button className="session__button" onClick={() => resetSets(task.id)}>x</button>
													</div>
												)
											}
											if ((activity === "time") && (amount !== "")) {
												return (
													<div className="session__cell" key={activity.id}>
														{activity}: {amount}s 	<button className="session__button" onClick={() => resetSets(task.id)}>x</button>
													</div>)
											}
									
								
												
												
											










											return null



										})}
									</div>
								);
							}
							return null;
						})}
					</div>
				)
			)}

		</div>
	)
};

export default RenderSession;