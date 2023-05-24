import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState({
    modalState: false,
    editState: false,
    removeState: false,
    modalId: undefined,
  });

  const toggleModal = (id) => {
    setModal({
      modalState: !modal.modalState,
      modalId: id,
    });
  };

  const toggleEditModal = (id) => {
    setModal({
      editState: !modal.editState,
      modalId: id,
    });
  };

  const toggleRemoveModal = (id) => {
    setModal({
      removeState: !modal.removeState,
      modalId: id,
    });
  };

  return { modal, toggleModal, toggleEditModal, toggleRemoveModal };
};
