import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
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
import { RemoveButton } from "../../styled";
import RemoveModal from "../../common/RemoveModal";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import { Buttons, EditButton } from "../RenderExc/styled";
import EditModal from "./EditModal";

const Home = () => {

	const dispatch = useDispatch();

	const units = useSelector(selectUnitState);
	const active = useSelector(selectActiveName);

	const dragItem = useRef(null);
	const dragOverItem = useRef(null);
		
	const handleDrag = () => {
		const start = dragItem.current;
		const end = dragOverItem.current;
		dispatch(dragUnit({start, end}))
	}

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
						onDragStart={() => dragItem.current = unit.id}
						onDragEnter={() => dragOverItem.current = unit.id}
						onDragOver={(e) => e.preventDefault()}
						onDragEnd={handleDrag}
					>
						{unit.name}
						<Buttons>
							<EditButton onClick={() => toggleEditModal(unit.id)}>
								🔧
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