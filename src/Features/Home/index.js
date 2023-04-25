import { useState } from "react";
import { LayoutWrapper, StyledButton, StyledList, StyledSpan, StyledUnit } from "./styled";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { removeUnit, selectActiveName, selectUnitState, setActiveUnit } from "./unitSlice";
import { RemoveButton } from "../../styled";

const Home = () => {
	const units = useSelector(selectUnitState);
	const active = useSelector(selectActiveName);

	const [modal, setModal] = useState(false);
	const dispatch = useDispatch();
	const toggleModal = () => {
		setModal(!modal)
	};

	return (
		<LayoutWrapper>
			{modal && <Modal toggleModal={toggleModal} />}
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
						<RemoveButton onClick={() => dispatch(removeUnit(unit.id))} >
							x
						</RemoveButton>
					</StyledUnit>
				)}
			</StyledList>
		</LayoutWrapper >
	)
};

export default Home;

