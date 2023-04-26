import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
	removeUnit,
	selectActiveName,
	selectUnitState,
	setActiveUnit
} from "./unitSlice";
import {
	LayoutWrapper,
	StyledButton,
	StyledList,
	StyledSpan,
	StyledUnit
} from "./styled";
import { RemoveButton } from "../../styled";
import RemoveModal from "../../hooks/RemoveModal";

const Home = () => {
	const units = useSelector(selectUnitState);
	const active = useSelector(selectActiveName);

	const [modal, setModal] = useState(false);
	const dispatch = useDispatch();
	const toggleModal = () => {
		setModal(!modal)
	};
	const [removeModal, setRemoveModal] = useState({
		state: false,
		id: undefined
	});

	const toggleRemoveModal = (id) => {
		setRemoveModal(prevState => ({
			state: !prevState.state,
			id: id 
		}))
	};

	return (
		<LayoutWrapper>
			{modal && <Modal toggleModal={toggleModal} />}
			{removeModal.state && <RemoveModal toggleRemoveModal={toggleRemoveModal} remove={removeUnit(removeModal.id)} />}
			<StyledButton onClick={() => toggleModal()}>
				dodaj
			</StyledButton>
			<StyledList>
				{Object.values(units).map(unit =>
					<StyledUnit
						active={active}
						name={unit.name}
						key={unit.id}
					>
						<StyledSpan onClick={() => dispatch(setActiveUnit(unit.id))}>{unit.name}</StyledSpan>
						{/* <RemoveButton onClick={() => dispatch(removeUnit(unit.id))} > */}
						<RemoveButton onClick={() => toggleRemoveModal(unit.id)}>
							x
						</RemoveButton>
					</StyledUnit>
				)}
			</StyledList>
		</LayoutWrapper >
	)
};

export default Home;