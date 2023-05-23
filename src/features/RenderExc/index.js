import { useSelector } from "react-redux";
import { useState } from "react";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import { selectActiveContent, removeExercise, set } from "../Home/unitSlice";
import Modal from "./Modal";
import RemoveModal from "../../common/RemoveModal";
import pencil from "../../common/img/pencil.svg";
import { Buttons, LayoutWrapper, Tile } from "./styled";
import { EditButton, RemoveButton } from "../styled";
import { useDragNDrop } from "../../common/hooks/useDragNDrop";

const RenderExcercises = () => {
  const tasks = useSelector(selectActiveContent);
  const { removeModal, toggleRemoveModal } = useRemoveModal();

  const {endTile, handleStart, handleEnter, handleDragDrop} = useDragNDrop(set);

  const [modal, setModal] = useState({
    modalState: false,
    modalId: "",
  });

  const toggleModal = (id) => {
    setModal({
      modalState: !modal.modalState,
      modalId: id,
    });
  };

  return (
    <LayoutWrapper>
      {modal.modalState && (
        <Modal id={modal.modalId} toggleModal={toggleModal} />
      )}
      {removeModal.state && (
        <RemoveModal
          toggleRemoveModal={toggleRemoveModal}
          remove={removeExercise(removeModal.id)}
        />
      )}
      {tasks.map((exercise) => (
        <Tile
          key={exercise.id}
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
            <EditButton onClick={() => toggleModal(exercise.id)}>
              <img src={pencil} alt="" />
            </EditButton>
            <RemoveButton onClick={() => toggleRemoveModal(exercise.id)}>
              x
            </RemoveButton>
          </Buttons>
        </Tile>
      ))}
    </LayoutWrapper>
  );
};

export default RenderExcercises;