import { useSelector } from "react-redux";
import { selectWorkouts } from "../workoutSlice";
import { LayoutWrapper, StyledButton } from "./styled";
import Modal from "./Modal";
import { useState } from "react";

const AddSession = () => {

	const tasks = useSelector(selectWorkouts);

	const [modal, setModal] = useState(false);

	console.log(modal)

	const toggleModal = () => {
		setModal(!modal)
	};

	if (tasks.length === 0) {
		return null
	}

	return (
		<LayoutWrapper >
			<StyledButton onClick={() => toggleModal()} />
			{modal && <Modal toggleModal={toggleModal} />}
		</LayoutWrapper>
	)
};

export default AddSession;