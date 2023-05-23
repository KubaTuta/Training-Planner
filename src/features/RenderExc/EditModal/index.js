import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { editName } from "../../Home/unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const EditModal = ({ id, toggleEditModal }) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event, id) => {
    event.preventDefault();
    newName.trim().length > 0 && dispatch(editName({ id, newName }));
    toggleEditModal();
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <ModalWrapper>
      <ModalTile>
        <form>
          <input
            placeholder="nazwa ćwiczenia"
            value={newName}
            type="textarea"
            ref={inputRef}
            maxLength={35}
            onChange={(event) => setNewName(event.target.value)}
          />
          <button onClick={(event) => onFormSubmit(event, id)}>Zapisz</button>
          <button onClick={() => toggleEditModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default EditModal;
