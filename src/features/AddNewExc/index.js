import { useState } from "react";
import Modal from "./Modal";
import { LayoutWrapper, Plus, StyledButton } from "./styled";

const AddNewExc = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <LayoutWrapper>
      {modal && <Modal toggleModal={toggleModal} />}
      <StyledButton onClick={() => toggleModal()}>
        <Plus />
      </StyledButton>
    </LayoutWrapper>
  );
};

export default AddNewExc;
