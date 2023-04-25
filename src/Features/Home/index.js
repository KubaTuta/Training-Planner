import { useState } from "react";
import { LayoutWrapper, StyledButton } from "./styled";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addExcercise, selectActiveContent, selectActiveName, selectUnitName, selectUnitState, setActiveUnit } from "./unitSlice";

const Home = () => {
	const units = useSelector(selectUnitState);
	console.log("units")
	console.log(Object.values(units))
	console.log("name")
	const names = useSelector(selectUnitName)
	console.log(names)
	const aktyw = useSelector(selectActiveName);
	const content = useSelector(selectActiveContent);
	console.log(content)

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
			<button onClick={() => dispatch(addExcercise("pompki"))}>2 powtórzenia</button>
			<ul>
				{Object.values(units).map(unit =>
					<li key={unit.id}>
						{unit.name}-id:{unit.id}
						<button onClick={() => dispatch(setActiveUnit(unit.id))}>
							aktywuj
						</button>
					</li>
				)}
			</ul>
			<p>aktywny: {aktyw}</p>
		</LayoutWrapper >
	)
};

export default Home;

