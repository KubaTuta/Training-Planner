import { useState } from "react";

const useRemoveModal = () => {
  const [removeModal, setRemoveModal] = useState({
    state: false,
    id: undefined
  });

  const toggleRemoveModal = (id) => {
    setRemoveModal(prevState => ({
      state: !prevState.state,
      id: id
    }))
  };

  return { removeModal, toggleRemoveModal };
};

export default useRemoveModal;