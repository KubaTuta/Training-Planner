import { useDispatch, useSelector } from "react-redux";
import { removeExcerise, selectWorkouts, setUp, setDown } from "../workoutSlice";
import { RemoveButton } from "../../styled";
import { Buttons, DownButton, EditButton, Exercise, LayoutWrapper, Tile, UpButton } from "./styled";
import { useState } from "react";
import Modal from "./Modal";

const RenderExcercises = () => {

	const tasks = useSelector(selectWorkouts);
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
								onClick={() => toggleModal(excercise.id)}
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