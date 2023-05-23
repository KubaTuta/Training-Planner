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

const SessionDate = () => {
  const tasks = useSelector(selectActiveContent);

  const { modal, toggleEditModal, toggleRemoveModal } = useModal();

  return (
    tasks.length !== 0 && (
      <LayoutWrapper>
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
                <MiniDateTile key={value.id}>
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
