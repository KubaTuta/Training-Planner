import { useSelector } from "react-redux";
import { LayoutWrapper, StyledButton } from "./styled";
import Modal from "./Modal";
import { useState } from "react";
import { selectActiveContent } from "../Home/unitSlice";

const AddSession = () => {

	const tasks = useSelector(selectActiveContent);

	const [modal, setModal] = useState(false);

	

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