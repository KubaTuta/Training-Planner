import { useDispatch, useSelector } from "react-redux";
import { useDragNDrop } from "../../common/hooks/useDragNDrop";
import { useModal } from "../../common/hooks/useModal";
import {
  dragUnit,
  removeUnit,
  selectActiveName,
  selectUnitState,
  setActiveUnit,
} from "./unitSlice";
import RemoveModal from "../../common/RemoveModal";
import Modal from "./Modal";
import EditModal from "./EditModal";
import pencil from "../../common/img/pencil.svg";
import { Buttons } from "../RenderExc/styled";
import { RemoveButton, EditButton } from "../styled";
import { LayoutWrapper, StyledButton, StyledList, StyledUnit } from "./styled";

const Home = () => {
  const dispatch = useDispatch();

  const units = useSelector(selectUnitState);
  const active = useSelector(selectActiveName);

  const { endTile, handleStart, handleEnter, handleDragDrop } =
    useDragNDrop(dragUnit);

  const { modal, toggleModal, toggleEditModal, toggleRemoveModal } = useModal();

  return (
    <LayoutWrapper>
      {modal.modalState && <Modal toggleModal={toggleModal} />}
      {modal.editState && (
        <EditModal toggleEditModal={toggleEditModal} id={modal.modalId} />
      )}
      {modal.removeState && (
        <RemoveModal
          toggleRemoveModal={toggleRemoveModal}
          remove={removeUnit(modal.modalId)}
        />
      )}
      <StyledButton onClick={() => toggleModal()}>
        Dodaj jednostkę treningową
      </StyledButton>
      <StyledList>
        {Object.values(units).map((unit) => (
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
            shadow={endTile}
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
        ))}
      </StyledList>
    </LayoutWrapper>
  );
};

export default Home;
