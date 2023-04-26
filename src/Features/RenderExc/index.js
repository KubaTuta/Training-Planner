import { useDispatch, useSelector } from "react-redux";
import { RemoveButton } from "../../styled";
import { Buttons, DownButton, EditButton, Exercise, LayoutWrapper, Tile, UpButton } from "./styled";
import { useState } from "react";
import Modal from "./Modal";
import { selectActiveContent, removeExercise, setUp, setDown } from "../Home/unitSlice";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import RemoveModal from "../../common/RemoveModal";

const RenderExcercises = () => {

	const tasks = useSelector(selectActiveContent);
	const dispatch = useDispatch();

	const [modal, setModal] = useState({
		modalState: false,
		modalId: ""
	});

	const { removeModal, toggleRemoveModal } = useRemoveModal();

	const toggleModal = (id) => {
		setModal({
			modalState: !modal.modalState,
			modalId: id
		})
	};

	return (
		<LayoutWrapper>
			{modal.modalState && (<Modal id={modal.modalId} toggleModal={toggleModal}/>)}
			{removeModal.state && <RemoveModal toggleRemoveModal={toggleRemoveModal} remove={removeExercise(removeModal.id)} />}
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
								onClick={() => toggleRemoveModal(exercise.id)}
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