import "./style.css";

const RenderSession = ({ tasks, setTasks }) => {

	const addActivity = (session, excerciseId, activity) => {
		console.log(`session: ${session}, exercise: ${excerciseId}`);
		const prompt = 99;
		const sessionName = "session" + (session);
		console.log(`sesja: ${sessionName}`);
		setTasks(tasks.map(excercise => {
			if (excercise.id === excerciseId) {
				return {
					...excercise,
					[sessionName]: 
					{
						...excercise[sessionName],
						[activity]: prompt,
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

	return (
		<div className="session">
			{tasks.map(excercise => (
				<div className="session__seti" key={excercise.id}>
					{Object.values(excercise).map(value => {
						if (typeof value === "object") {
							switch (true) {
								case ((value.reps !== "") && (value.sets === "")):
									return (
										<div className="session__set" key={value.id}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "sets")}>+</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "reps")}>x</button>
											</div>
										</div>
									);
								case ((value.reps !== "") && (value.sets !== "")):
									return (
										<div className="session__set" key={value.id}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "sets")}>x</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "reps")}>x</button>
											</div>
										</div>
									);
								case ((value.time !== "") && (value.sets === "")):
									return (
										<div className="session__set" key={value.id}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "sets")}>+</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} s<button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "time")}>x</button>
											</div>
										</div>
									);
								case ((value.time !== "") && (value.sets !== "")):
									return (
										<div className="session__set" key={value.id}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "sets")}>x</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} s<button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "time")}>x</button>
											</div>
										</div>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets === "")):
									return (
										<div className="session__set" key={value.id}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "sets")}>+</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "reps")}>+</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "time")}>+</button>
											</div>
										</div>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets !== "")):
									return (
										<div className="session__set" key={value.id}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeActivity(value.id, excercise.id, "sets")}>x</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__addButton" onClick={() => addActivity(value.id, excercise.id, "reps")}>+</button>
											</div>
											<div className="session__cell">
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