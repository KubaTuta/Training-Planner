import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RemoveButton } from "../../styled";
import { Buttons, EditButton, LayoutWrapper, Tile } from "./styled";
import { useState } from "react";
import Modal from "./Modal";
import { selectActiveContent, removeExercise, set } from "../Home/unitSlice";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import RemoveModal from "../../common/RemoveModal";

const RenderExcercises = () => {

	const tasks = useSelector(selectActiveContent);
	const dispatch = useDispatch();
	const { removeModal, toggleRemoveModal } = useRemoveModal();

	const dragItem = useRef(null);
	const dragOverItem = useRef(null);

	const handleDragDrop = () => {
		const start = dragItem.current
		const end = dragOverItem.current;
		dispatch(set({ start, end }))
	}

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
			{modal.modalState && (<Modal id={modal.modalId} toggleModal={toggleModal} />)}
			{removeModal.state && <RemoveModal toggleRemoveModal={toggleRemoveModal} remove={removeExercise(removeModal.id)} />}
			{tasks.map(exercise => (
				<Tile key={exercise.id}
					draggable
					onDragStart={() => dragItem.current = exercise.id}
					onDragEnter={() => dragOverItem.current = exercise.id}
					onDragOver={(e) => e.preventDefault()}
					onDragEnd={handleDragDrop}
				>
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
				</Tile>
			))}
		</LayoutWrapper>
	)
};

export default RenderExcercises;