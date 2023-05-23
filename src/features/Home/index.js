import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
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
import { useDragNDrop } from "../../common/hooks/useDragNDrop";

const Home = () => {
  const dispatch = useDispatch();

  const units = useSelector(selectUnitState);
  const active = useSelector(selectActiveName);

  const {endTile, handleStart, handleEnter, handleDragDrop} = useDragNDrop(dragUnit);
 
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [editModal, setEditModal] = useState({
    state: false,
    id: undefined,
  });

  const toggleEditModal = (id) => {
    setEditModal((prevEditModal) => ({
      state: !prevEditModal.state,
      id: id,
    }));
  };

  const { removeModal, toggleRemoveModal } = useRemoveModal();

  return (
    <LayoutWrapper>
      {modal && <Modal toggleModal={toggleModal} />}
      {editModal.state && (
        <EditModal toggleEditModal={toggleEditModal} id={editModal.id} />
      )}
      {removeModal.state && (
        <RemoveModal
          toggleRemoveModal={toggleRemoveModal}
          remove={removeUnit(removeModal.id)}
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
