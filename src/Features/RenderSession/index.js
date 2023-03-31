import { useDispatch, useSelector } from "react-redux";
import { addActivity, removeActivity, selectWorkouts } from "../workoutSlice";
import { Activity, Excercise, PlusButton, RemoveButton, SessionContainer, SessionTile } from "./styled";

const RenderSession = () => {

	const dispatch = useDispatch();
	const tasks = useSelector(selectWorkouts);

	const addHandle = (session, excerciseId, activity) => {
		dispatch(addActivity({ session, excerciseId, activity }))
	};

	const removeHandle = (session, excerciseId, activity) => {
		dispatch(removeActivity({ session, excerciseId, activity }))
	};

	if (tasks.length === 0) {
		return null
	}

	return (
		<SessionContainer>
			{tasks.map(excercise => (
				<Excercise key={excercise.id}>
					{Object.values(excercise).map(value => {
						if (typeof value === "object") {
							switch (true) {
								case ((value.reps !== "") && (value.sets === "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "sets")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "reps")}
												>
													x
												</RemoveButton>
											</Activity>
										</SessionTile>
									);
								case ((value.reps !== "") && (value.sets !== "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "sets")}
												>
													x
												</RemoveButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "reps")}
												>
													x
												</RemoveButton>
											</Activity>
										</SessionTile>
									);
								case ((value.time !== "") && (value.sets === "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "sets")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Czas: {value.time} s
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "time")}
												>
													x
												</RemoveButton>
											</Activity>
										</SessionTile>
									);
								case ((value.time !== "") && (value.sets !== "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "sets")}
												>
													x
												</RemoveButton>
											</Activity>
											<Activity>
												Czas: {value.time} s
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "time")}
												>
													x
												</RemoveButton>
											</Activity>
										</SessionTile>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets === "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "sets")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "reps")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Czas: {value.time}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "time")}>
													+
												</PlusButton>
											</Activity>
										</SessionTile>
									);
								case ((value.reps === "") && (value.time === "") && (value.sets !== "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<RemoveButton
													onClick={() => removeHandle(value.id, excercise.id, "sets")}
												>
													x
												</RemoveButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "reps")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Czas: {value.time}
												<PlusButton
													onClick={() => addHandle(value.id, excercise.id, "time")}
												>
													+
												</PlusButton>
											</Activity>
										</SessionTile>
									);
								default: break;
							}
						}
						return null
					})}
				</Excercise>
			))}
		</SessionContainer>
	)
};

export default RenderSession;