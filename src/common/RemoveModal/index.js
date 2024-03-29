import { ModalTile, ModalWrapper } from '../../styled';
import { useDispatch } from 'react-redux';
import { CancelButton, ConfirmationButton } from './styled';

const RemoveModal = ({ toggleRemoveModal, remove }) => {

  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(remove);
    toggleRemoveModal();
  };

  return (
    <ModalWrapper>
      <ModalTile>
        <p>Czy na pewno chcesz usunąć ten element?</p>
        <ConfirmationButton onClick={handleRemove}>Tak</ConfirmationButton>
        <CancelButton onClick={() => toggleRemoveModal()}>Anuluj</CancelButton>
      </ModalTile>
    </ModalWrapper>
  )
};

export default RemoveModal
