import { useSelector } from "react-redux";
import { selectActiveContent } from "../Home/unitSlice";
import Modal from "./Modal";
import { LayoutWrapper, StyledButton } from "./styled";
import { useModal } from "../../common/hooks/useModal";

const AddSession = () => {
  const tasks = useSelector(selectActiveContent);

  const { modal, toggleModal } = useModal();

  return (
    tasks?.length !== 0 && (
      <LayoutWrapper>
        <StyledButton onClick={() => toggleModal()} />
        {modal.modalState && <Modal toggleModal={toggleModal} />}
      </LayoutWrapper>
    )
  );
};

export default AddSession;
