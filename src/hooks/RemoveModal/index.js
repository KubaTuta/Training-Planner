import { ModalTile, ModalWrapper } from '../../styled';
import { useDispatch } from 'react-redux';

const RemoveModal = ({ toggleRemoveModal, remove }) => {

  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(remove);
    toggleRemoveModal(undefined);
  };

  return (
    <ModalWrapper>
      <ModalTile>
        <p>Czy na pewno chcesz usunąć ten element?</p>
        <button onClick={handleRemove}>Tak</button>
        <button onClick={() => toggleRemoveModal(undefined)}>Anuluj</button>
      </ModalTile>
    </ModalWrapper>
  )
};

export default RemoveModal
