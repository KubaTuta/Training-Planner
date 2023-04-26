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
import RemoveModal from "../../common/RemoveModal";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";

const Home = () => {

	const dispatch = useDispatch();

	const units = useSelector(selectUnitState);
	const active = useSelector(selectActiveName);

	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal)
	};
	
	const { removeModal, toggleRemoveModal } = useRemoveModal();

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