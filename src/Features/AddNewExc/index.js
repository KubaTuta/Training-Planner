import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExcercise } from "../workoutSlice";
import { LayoutWrapper, Plus, StyledButton, StyledForm } from "./styled";

const AddNewExc = () => {

	const dispatch = useDispatch();
	const [newTask, setNewTask] = useState("");

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();

		newTask.trim().length > 0 && dispatch(addExcercise(newTask.trim()));
		setNewTask("");
	});

	return (

		<LayoutWrapper>
			<StyledForm onSubmit={onFormSubmit}>
				<input
					placeholder=" nazwa ćwiczenia"
					required={true}
					value={newTask}
					onChange={({ target }) => setNewTask(target.value)}
				/>
				<StyledButton type="submit">
					<Plus />
				</StyledButton>
			</StyledForm>
		</LayoutWrapper >
	);
};

export default AddNewExc;
