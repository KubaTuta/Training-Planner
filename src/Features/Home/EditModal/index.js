import React, { useEffect, useRef, useState } from 'react'
import { ModalTile, ModalWrapper } from '../../../styled'
import { useDispatch } from 'react-redux';
import { editUnitName } from '../unitSlice';

const EditModal = ({ toggleEditModal, id }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [newName, setNewName] = useState("");

  const onFormSubmit = ((event) => {
    event.preventDefault();
    newName.trim().length > 0 && dispatch(editUnitName({ id, newName }));
    toggleEditModal();
  });

  useEffect(() => inputRef.current.focus(), []);
  return (
    <ModalWrapper>
      <ModalTile>
        <form>
          <input
            placeholder="nazwa jednostki treningowej"
            value={newName}
            type="text"
            ref={inputRef}
            onChange={(event) => setNewName(event.target.value)}
          />
          <button
            onClick={(event) => onFormSubmit(event)}
          >Zapisz</button>
          <button
            onClick={() => toggleEditModal()}
          >Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  )
};

export default EditModal;