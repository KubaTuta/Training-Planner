import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { editName } from "../../Home/unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const Modal = ({ id, toggleModal }) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event, id) => {
    event.preventDefault();
    newName.trim().length > 0 && dispatch(editName({ id, newName }));
    toggleModal();
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
          <button onClick={() => toggleModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default Modal;
