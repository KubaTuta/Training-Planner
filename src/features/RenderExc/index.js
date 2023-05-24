import { useSelector } from "react-redux";
import { selectActiveContent, removeExercise, set } from "../Home/unitSlice";
import { useModal } from "../../common/hooks/useModal";
import EditModal from "./EditModal";
import RemoveModal from "../../common/RemoveModal";
import pencil from "../../common/img/pencil.svg";
import { Buttons, LayoutWrapper, Tile } from "./styled";
import { EditButton, RemoveButton } from "../styled";
import { useDragNDrop } from "../../common/hooks/useDragNDrop";

const RenderExcercises = () => {
  const tasks = useSelector(selectActiveContent);

  const { endTile, handleStart, handleEnter, handleDragDrop } =
    useDragNDrop(set);
  const { modal, toggleEditModal, toggleRemoveModal } = useModal();

  if (window.innerWidth < 600) {
    return [
      <LayoutWrapper>
        {modal.editState && (
          <EditModal id={modal.modalId} toggleEditModal={toggleEditModal} />
        )}
        {modal.removeState && (
          <RemoveModal
            toggleRemoveModal={toggleRemoveModal}
            remove={removeExercise(modal.modalId)}
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
              <EditButton onClick={() => toggleEditModal(exercise.id)}>
                <img src={pencil} alt="" />
              </EditButton>
              <RemoveButton onClick={() => toggleRemoveModal(exercise.id)}>
                x
              </RemoveButton>
            </Buttons>
          </Tile>
        ))}
      </LayoutWrapper>,
    ];
  } else return (
    <LayoutWrapper>
      {modal.editState && (
        <EditModal id={modal.modalId} toggleEditModal={toggleEditModal} />
      )}
      {modal.removeState && (
        <RemoveModal
          toggleRemoveModal={toggleRemoveModal}
          remove={removeExercise(modal.modalId)}
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
            <EditButton onClick={() => toggleEditModal(exercise.id)}>
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
