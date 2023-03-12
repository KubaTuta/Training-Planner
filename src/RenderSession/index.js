import "./style.css";

const RenderSession = ({ tasks, setTasks }) => {

	const addActivity = (session, excerciseId, activity) => {
		const promptValue = prompt("wprowadź wartość");
		const sessionName = "session" + (session);
		setTasks(tasks.map(excercise => {
			if (excercise.id === excerciseId) {
				return {
					...excercise,
					[sessionName]:
					{
						...excercise[sessionName],
						[activity]: promptValue,
					}
				}
			}
			return excercise
		}
		))
	};

	const removeActivity = (session, excerciseId, activity) => {
		const sessionName = "session" + (session);
		setTasks(tasks.map(excercise => {
			if (excercise.id === excerciseId) {
				return {
					...excercise,
					[sessionName]:
					{
						...excercise[sessionName],
						[activity]: "",
					}
				}
			}
			return excercise
		}
		))
	};

	if (tasks.length === 0) {
		return null
	}

	return (
		<div className="session">
			{tasks.map(excercise => (
				<div className="session__excercise" key={excercise.id}>
					{Object.values(excercise).map(value => {
						if (typeof value === "object") {
							switch (true) {
								case ((value.reps !== "") && (value.sets === "")):
									return (
										<div className="session__sets" key={value.id}>
											<div className="session__activity">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "sets")}>+</button>
											</div>
											<div className="session__activity">
												Powtórzenia: {value.reps} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "reps")}>x</button>
											</div>
										</div>
									);
								case ((value.reps !== "") && (value.sets !== "")):
									return (
										<div className="session__sets" key={value.id}>
											<div className="session__activity">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "sets")}>x</button>
											</div>
											<div className="session__activity">
												Powtórzenia: {value.reps} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "reps")}>x</button>
											</div>
										</div>
									);
								case ((value.time !== "") && (value.sets === "")):
									return (
										<div className="session__sets" key={value.id}>
											<div className="session__activity">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "sets")}>+</button>
											</div>
											<div className="session__activity">
												Czas: {value.time} s<button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "time")}>x</button>
											</div>
										</div>
									);
								case ((value.time !== "") && (value.sets !== "")):
									return (
										<div className="session__sets" key={value.id}>
											<div className="session__activity">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "sets")}>x</button>
											</div>
											<div className="session__activity">
												Czas: {value.time} s<button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "time")}>x</button>
											</div>
										</div>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets === "")):
									return (
										<div className="session__sets" key={value.id}>
											<div className="session__activity">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "sets")}>+</button>
											</div>
											<div className="session__activity">
												Powtórzenia: {value.reps} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "reps")}>+</button>
											</div>
											<div className="session__activity">
												Czas: {value.time} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "time")}>+</button>
											</div>
										</div>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets !== "")):
									return (
										<div className="session__sets" key={value.id}>
											<div className="session__activity">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "sets")}>x</button>
											</div>
											<div className="session__activity">
												Powtórzenia: {value.reps} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "reps")}>+</button>
											</div>
											<div className="session__activity">
												Czas: {value.time} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "time")}>+</button>
											</div>
										</div>
									);
								default: break;
							}
						}
						return null
					})}
				</div>
			))}
		</div>
	)
};

export default RenderSession;