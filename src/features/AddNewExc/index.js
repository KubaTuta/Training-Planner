import Modal from "./Modal";
import { LayoutWrapper, Plus, StyledButton } from "./styled";
import { useModal } from "../../common/hooks/useModal";

const AddNewExc = () => {
  const { modal, toggleModal } = useModal();

  return (
    <LayoutWrapper>
      {modal.modalState && <Modal toggleModal={toggleModal} />}
      <StyledButton onClick={() => toggleModal()}>
        <Plus />
      </StyledButton>
    </LayoutWrapper>
  );
};

export default AddNewExc;
