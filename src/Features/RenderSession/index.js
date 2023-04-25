import { useDispatch, useSelector } from "react-redux";
import { addActivity, removeActivity } from "../workoutSlice";
import { Activity, Excercise, PlusButton, LayoutWrapper, SessionTile } from "./styled";
import { RemoveButton } from "../../styled";
import { selectActiveContent } from "../Home/unitSlice";

const RenderSession = () => {

	const dispatch = useDispatch();
	const tasks = useSelector(selectActiveContent);

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
		<LayoutWrapper>
			{tasks.map(exercise => (
				<Excercise key={exercise.id}>
					{Object.values(exercise).map(value => {
						if (typeof value === "object") {
							switch (true) {
								case ((value.reps !== "") && (value.sets === "")):
									return (
										<SessionTile key={value.id}>
											<Activity>
												Serie: {value.sets}
												<PlusButton
													onClick={() => addHandle(value.id, exercise.id, "sets")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<RemoveButton
													onClick={() => removeHandle(value.id, exercise.id, "reps")}
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
													onClick={() => removeHandle(value.id, exercise.id, "sets")}
												>
													x
												</RemoveButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<RemoveButton
													onClick={() => removeHandle(value.id, exercise.id, "reps")}
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
													onClick={() => addHandle(value.id, exercise.id, "sets")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Czas: {value.time} s
												<RemoveButton
													onClick={() => removeHandle(value.id, exercise.id, "time")}
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
													onClick={() => removeHandle(value.id, exercise.id, "sets")}
												>
													x
												</RemoveButton>
											</Activity>
											<Activity>
												Czas: {value.time} s
												<RemoveButton
													onClick={() => removeHandle(value.id, exercise.id, "time")}
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
													onClick={() => addHandle(value.id, exercise.id, "sets")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<PlusButton
													onClick={() => addHandle(value.id, exercise.id, "reps")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Czas: {value.time}
												<PlusButton
													onClick={() => addHandle(value.id, exercise.id, "time")}>
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
													onClick={() => removeHandle(value.id, exercise.id, "sets")}
												>
													x
												</RemoveButton>
											</Activity>
											<Activity>
												Powtórzenia: {value.reps}
												<PlusButton
													onClick={() => addHandle(value.id, exercise.id, "reps")}
												>
													+
												</PlusButton>
											</Activity>
											<Activity>
												Czas: {value.time}
												<PlusButton
													onClick={() => addHandle(value.id, exercise.id, "time")}
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
		</LayoutWrapper>
	)
};

export default RenderSession;