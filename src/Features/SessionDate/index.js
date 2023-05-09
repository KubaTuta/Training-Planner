import { useSelector } from "react-redux";
import { useState } from "react";
import { removeSession } from "../Home/unitSlice";
import { selectActiveContent } from "../Home/unitSlice";
import useRemoveModal from "../../common/RemoveModal/useRemoveModal";
import RemoveModal from "../../common/RemoveModal";
import Modal from "./Modal";
import { Pencil } from "../../common/img/pencil";
import { Buttons } from "../RenderExc/styled";
import { EditButton, RemoveButton } from "../styled";
import { LayoutWrapper, MiniDateTile, Date } from "./styled";

const SessionDate = () => {
  const tasks = useSelector(selectActiveContent);

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

  const { removeModal, toggleRemoveModal } = useRemoveModal();

  return (
    tasks.length !== 0 && (
      <LayoutWrapper>
        {modal.modalState && (
          <Modal id={modal.modalId} toggleModal={toggleModal} />
        )}
        {removeModal.state && (
          <RemoveModal
            toggleRemoveModal={toggleRemoveModal}
            remove={removeSession(removeModal.id)}
          />
        )}
        <Date>
          {Object.values(tasks[0]).map((value) => {
            if (typeof value === "object") {
              return (
                <MiniDateTile key={value.id}>
                  {value.date}
                  <Buttons>
                    <EditButton onClick={() => toggleModal(value.id)}>
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
