import { useDispatch, useSelector } from "react-redux";
import { removeExcerise, editName, selectWorkouts, setUp, setDown } from "../workoutSlice";
import { RemoveButton } from "../../styled";
import { Buttons, DownButton, EditButton, Exercise, LayoutWrapper, Tile, UpButton } from "./styled";

const RenderExcercises = () => {

	const tasks = useSelector(selectWorkouts);
	const dispatch = useDispatch();

	return (
		<LayoutWrapper>
			{tasks.map(excercise => (
				<Tile key={excercise.id}>
					{
						(excercise === tasks[0])
							? ""
							: <UpButton onClick={() => dispatch(setUp(excercise.id))} />
					}
					<Exercise>
						{excercise.excercise}
						<Buttons>
							<EditButton
								onClick={() => dispatch(editName(excercise.id))}
							>
								🔧
							</EditButton>
							<RemoveButton
								onClick={() => dispatch(removeExcerise(excercise.id))}
							>
								x
							</RemoveButton>
						</Buttons>
					</Exercise>
					{
						(excercise === tasks[tasks.length - 1])
							? ""
							: <DownButton onClick={() => dispatch(setDown(excercise.id))} />
					}
				</Tile>
			))}
		</LayoutWrapper>
	)
};

export default RenderExcercises;