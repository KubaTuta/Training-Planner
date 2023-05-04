import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import {
	dragUnit,
	removeUnit,
	selectActiveName,
	selectUnitState,
	setActiveUnit
} from "./unitSlice";
import {
	LayoutWrapper,
	StyledButton,
	StyledList,
	StyledUnit
} from "./styled";
import Modal from "./Modal";
import RemoveModal from "../../common/RemoveModal";
import EditModal from "./EditModal";
import { RemoveButton, EditButton } from "../styled";
import { Buttons } from "../RenderExc/styled";
import pencil from "../../common/img/pencil.svg";

const Home = () => {

	const dispatch = useDispatch();

	const units = useSelector(selectUnitState);
	const active = useSelector(selectActiveName);

	const dragItem = useRef(null);
	const dragOverItem = useRef(null);
	const [startTile, setStartTile] = useState(null);
	const [endTile, setEndTile] = useState(null);

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
			dispatch(dragUnit({ start: startTile, end: endTile }))
			setStartTile(endTile)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endTile])

	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal)
	};

	const [editModal, setEditModal] = useState({
		state: false,
		id: undefined
	});

	const toggleEditModal = (id) => {
		setEditModal(prevEditModal => ({
			state: !prevEditModal.state,
			id: id
		}))
	};

	const { removeModal, toggleRemoveModal } = useRemoveModal();

	return (
		<LayoutWrapper>
			{modal && <Modal toggleModal={toggleModal} />}
			{editModal.state && <EditModal toggleEditModal={toggleEditModal} id={editModal.id} />}
			{removeModal.state && <RemoveModal toggleRemoveModal={toggleRemoveModal} remove={removeUnit(removeModal.id)} />}
			<StyledButton onClick={() => toggleModal()}>
				Dodaj jednostkę treningową
			</StyledButton>
			<StyledList>
				{Object.values(units).map(unit =>
					<StyledUnit
						active={active}
						id={unit.id}
						key={unit.id}
						onClick={() => dispatch(setActiveUnit(unit.id))}
						draggable
						onDragStart={() => handleStart(unit.id)}
						onDragEnter={() => handleEnter(unit.id)}
						onDragOver={(e) => e.preventDefault()}
						onDragEnd={handleDragDrop}
						toSpot={endTile}
					>
						{unit.name}
						<Buttons>
							<EditButton onClick={() => toggleEditModal(unit.id)}>
								<img src={pencil} alt="" />
							</EditButton>
							<RemoveButton onClick={() => toggleRemoveModal(unit.id)}>
								x
							</RemoveButton>
						</Buttons>

					</StyledUnit>
				)}
			</StyledList>
		</LayoutWrapper >
	)
};

export default Home;