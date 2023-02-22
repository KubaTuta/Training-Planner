import "./style.css";

const RenderSession = ({ tasks, setTasks }) => {

	const addSets = (session, excerciseId) => {
		console.log(`session: ${session}, exercise: ${excerciseId}`);
		const prompt = 99;
		const sessionName = "session" + (session - 1);
		console.log(`sesja: ${sessionName}`);
		setTasks(tasks.map(task => {
			if (task.id === excerciseId) {
				return {
					...task,
					[sessionName]: 
					{
						...task[sessionName],
						sets: prompt,
					}
				}
			}
			return task
		}
		))
	};

	const removeSets = (session, excerciseId) => {
		const sessionName = "session" + (session - 1);
		setTasks(tasks.map(task => {
			if (task.id === excerciseId) {
				return {
					...task,
					[sessionName]: 
					{
						...task[sessionName],
						sets: "",
					}
				}
			}
			return task
		}
		))
	};

	const addReps = (session, excerciseId) => {
		const prompt = 77;
		const sessionName = "session" + (session - 1);
		setTasks(tasks.map(task => {
			if (task.id === excerciseId) {
				return {
					...task,
					[sessionName]: 
					{
						...task[sessionName],
						reps: prompt,
					}
				}
			}
			return task
		}
		))
	};

	const removeReps = (session, excerciseId) => {
		const sessionName = "session" + (session - 1);
		setTasks(tasks.map(task => {
			if (task.id === excerciseId) {
				return {
					...task,
					[sessionName]: 
					{
						...task[sessionName],
						reps: "",
					}
				}
			}
			return task
		}
		))
	};

	const addTime = (session, excerciseId) => {
		const prompt = 69;
		const sessionName = "session" + (session - 1);
		setTasks(tasks.map(task => {
			if (task.id === excerciseId) {
				return {
					...task,
					[sessionName]: 
					{
						...task[sessionName],
						time: prompt,
					}
				}
			}
			return task
		}
		))
	};

	const removeTime = (session, excerciseId) => {
		const sessionName = "session" + (session - 1);
		setTasks(tasks.map(task => {
			if (task.id === excerciseId) {
				return {
					...task,
					[sessionName]: 
					{
						...task[sessionName],
						time: "",
					}
				}
			}
			return task
		}
		))
	};
	

	return (
		<div className="session">
			{tasks.map(excercise => (
				<div className="session__seti" key={excercise.id}>
					{Object.values(excercise).map((value, session) => {
						if (typeof value === "object") {
							switch (true) {
								case ((value.reps !== "") && (value.sets === "")):
									return (
										<div className="session__set" key={session}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addSets(session, excercise.id)}>+</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__removeButton" onClick={() => removeReps(session, excercise.id)}>x</button>
											</div>
										</div>
									);
								case ((value.reps !== "") && (value.sets !== "")):
									return (
										<div className="session__set" key={session}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeSets(session, excercise.id)}>x</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__removeButton" onClick={() => removeReps(session, excercise.id)}>x</button>
											</div>
										</div>
									);
								case ((value.time !== "") && (value.sets === "")):
									return (
										<div className="session__set" key={session}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addSets(session, excercise.id)}>+</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} s<button className="session__removeButton" onClick={() => removeTime(session, excercise.id)}>x</button>
											</div>
										</div>
									);
								case ((value.time !== "") && (value.sets !== "")):
									return (
										<div className="session__set" key={session}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeSets(session, excercise.id)}>x</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} s<button className="session__removeButton" onClick={() => removeTime(session, excercise.id)}>x</button>
											</div>
										</div>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets === "")):
									return (
										<div className="session__set" key={session}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__addButton" onClick={() => addSets(session, excercise.id)}>+</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__addButton" onClick={() => addReps(session, excercise.id)}>+</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} <button className="session__addButton" onClick={() => addTime(session, excercise.id)}>+</button>
											</div>
										</div>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets !== "")):
									return (
										<div className="session__set" key={session}>
											<div className="session__cell">
												Serie: {value.sets} <button className="session__removeButton" onClick={() => removeSets(session, excercise.id)}>x</button>
											</div>
											<div className="session__cell">
												Powtórzenia: {value.reps} <button className="session__addButton" onClick={() => addReps(session, excercise.id)}>+</button>
											</div>
											<div className="session__cell">
												Czas: {value.time} <button className="session__addButton" onClick={() => addTime(session, excercise.id)}>+</button>
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