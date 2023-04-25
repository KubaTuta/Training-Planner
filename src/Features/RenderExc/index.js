import { useDispatch, useSelector } from "react-redux";
import { removeExcerise, setUp, setDown } from "../workoutSlice";
import { RemoveButton } from "../../styled";
import { Buttons, DownButton, EditButton, Exercise, LayoutWrapper, Tile, UpButton } from "./styled";
import { useState } from "react";
import Modal from "./Modal";
import { selectActiveContent } from "../Home/unitSlice";

const RenderExcercises = () => {

	const tasks = useSelector(selectActiveContent);
	const dispatch = useDispatch();

	const [modal, setModal] = useState({
		modalState: false,
		modalId: ""
	});


	const toggleModal = (id) => {
		setModal({
			modalState: !modal.modalState,
			modalId: id
		})
	};

	return (
		<LayoutWrapper>
			{modal.modalState && (<Modal id={modal.modalId} toggleModal={toggleModal}/>)}
			{tasks.map(exercise => (
				<Tile key={exercise.id}>
					{
						(exercise === tasks[0])
							? ""
							: <UpButton onClick={() => dispatch(setUp(exercise.id))} />
					}
					<Exercise>
						{exercise.exercise}
						<Buttons>
							<EditButton
								onClick={() => toggleModal(exercise.id)}
							>
								🔧
							</EditButton>
							<RemoveButton
								onClick={() => dispatch(removeExcerise(exercise.id))}
							>
								x
							</RemoveButton>
						</Buttons>
					</Exercise>
					{
						(exercise === tasks[tasks.length - 1])
							? ""
							: <DownButton onClick={() => dispatch(setDown(exercise.id))} />
					}
				</Tile>
			))}
			
		</LayoutWrapper>
	)
};

export default RenderExcercises;