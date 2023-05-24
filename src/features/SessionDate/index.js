import { useSelector } from "react-redux";
import { removeSession } from "../Home/unitSlice";
import { selectActiveContent } from "../Home/unitSlice";
import RemoveModal from "../../common/RemoveModal";
import { Pencil } from "../../common/img/pencil";
import { Buttons } from "../RenderExc/styled";
import { EditButton, RemoveButton } from "../styled";
import { LayoutWrapper, MiniDateTile, Date } from "./styled";
import { useModal } from "../../common/hooks/useModal";
import EditModal from "./EditModal";
import MobileSession from "../MobileSession";

const SessionDate = () => {
  const tasks = useSelector(selectActiveContent);

  const { modal, toggleModal, toggleEditModal, toggleRemoveModal } = useModal();

  return (
    tasks.length !== 0 && (
      <LayoutWrapper>
        {modal.modalState && <MobileSession toggleModal={toggleModal} id={modal.modalId} />}
        {modal.editState && (
          <EditModal id={modal.modalId} toggleEditModal={toggleEditModal} />
        )}
        {modal.removeState && (
          <RemoveModal
            toggleRemoveModal={toggleRemoveModal}
            remove={removeSession(modal.modalId)}
          />
        )}
        <Date>
          {Object.values(tasks[0]).map((value) => {
            if (typeof value === "object") {
              return (
                <MiniDateTile
                  key={value.id}
                  onClick={()=>window.innerWidth < 601 ? toggleModal(value.id) : null}
                >
                  {value.date}
                  <Buttons>
                    <EditButton onClick={() => toggleEditModal(value.id)}>
                      <Pencil />
                    </EditButton>
                    <RemoveButton onClick={() => toggleRemoveModal(value.id)}>
                      x
                    </RemoveButton>
                  </Buttons>
                </MiniDateTile>
              );
            } else return null;
          })}
        </Date>
      </LayoutWrapper>
    )
  );
};

export default SessionDate;
