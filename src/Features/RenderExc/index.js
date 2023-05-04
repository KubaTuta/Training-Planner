import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Buttons, LayoutWrapper, Tile } from "./styled";
import { EditButton, RemoveButton } from "../styled";
import { useState } from "react";
import { selectActiveContent, removeExercise, set } from "../Home/unitSlice";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import Modal from "./Modal";
import RemoveModal from "../../common/RemoveModal";
import pencil from "../../common/img/pencil.svg";

const RenderExcercises = () => {

	const tasks = useSelector(selectActiveContent);
	const dispatch = useDispatch();
	const { removeModal, toggleRemoveModal } = useRemoveModal();

	const [startTile, setStartTile] = useState(null);
	const [endTile, setEndTile] = useState(null);

	const dragItem = useRef(null);
	const dragOverItem = useRef(null);

	const handleStart = (id) => {
		dragItem.current = id;
		setStartTile(id)
	}

	const handleEnter = (id) => {
		dragOverItem.current = id;
		setEndTile(id)

	}
	const handleDragDrop = () => {
		setEndTile(null)
		setStartTile(null)
	}

	useEffect(() => {
		if (startTile !== null & endTile !== null) {
			dispatch(set({ start: startTile, end: endTile }))
			setStartTile(endTile)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endTile])

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
					onDragStart={() => handleStart(exercise.id)}
					onDragEnter={() => handleEnter(exercise.id)}
					onDragOver={(e) => e.preventDefault()}
					onDragEnd={handleDragDrop}
					id={exercise.id}
					toSpot={endTile}
				>
					{exercise.exercise}
					<Buttons>
						<EditButton
							onClick={() => toggleModal(exercise.id)}
						>
							<img src={pencil} alt="" />
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