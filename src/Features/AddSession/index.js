import { useDispatch, useSelector } from "react-redux";
import { addSession, selectWorkouts } from "../workoutSlice";
import { removeSession } from "../workoutSlice";
import { RemoveButton } from "../../styled";
import { AddButton, LayoutWrapper, MiniDateTile, SessionDate, StyledForm } from "./styled";

const AddSession = ({ newDate, setNewDate }) => {

	const dispatch = useDispatch();
	const tasks = useSelector(selectWorkouts);

	const onFormSubmit = ("submit", (event) => {
		event.preventDefault();
		newDate && dispatch(addSession(newDate))
	});

	if (tasks.length === 0) {
		return null
	}

	return (
		<LayoutWrapper>
			<StyledForm onSubmit={onFormSubmit}>
				<input
					type="date"
					required={true}
					value={newDate}
					onChange={({ target }) => setNewDate(target.value)}
				/>
				<AddButton type="submit">
					Dodaj
				</AddButton>
			</StyledForm>
			<SessionDate>
				{Object.values(tasks[0]).map((value) => {
					if (typeof value === "object") {
						return (
							<MiniDateTile key={value.id}>
								{value.date}
								<RemoveButton
									onClick={() => dispatch(removeSession(value.id))}
								>
									x
								</RemoveButton>
							</MiniDateTile>
						)
					}
					else return null
				})}
			</SessionDate>
		</LayoutWrapper>
	)
};

export default AddSession;