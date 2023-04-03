import { useDispatch, useSelector } from "react-redux";
import { selectWorkouts } from "../workoutSlice";
import { removeSession } from "../workoutSlice";
import { RemoveButton } from "../../styled";
import { LayoutWrapper, MiniDateTile, Date } from "./styled";
import { Buttons, EditButton } from "../RenderExc/styled";
import Modal from "./Modal";
import { useState } from "react";

const SessionDate = () => {

	const dispatch = useDispatch();
	const tasks = useSelector(selectWorkouts);

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

	if (tasks.length === 0) {
		return null
	}

	return (
		<LayoutWrapper>
			{modal.modalState && <Modal id={modal.modalId} toggleModal={toggleModal} />}
			<Date>
				{Object.values(tasks[0]).map((value) => {
					if (typeof value === "object") {
						return (
							<MiniDateTile key={value.id}>
								{value.date}
								<Buttons>
									<EditButton
										onClick={() => toggleModal(value.id)}
									>
										🔧
									</EditButton>
									<RemoveButton
										onClick={() => dispatch(removeSession(value.id))}
									>
										x
									</RemoveButton>
								</Buttons>

							</MiniDateTile>
						)
					}
					else return null
				})}
			</Date>
		</LayoutWrapper>
	)
};

export default SessionDate;