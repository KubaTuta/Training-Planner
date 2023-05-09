import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addExcercise } from "../../Home/unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const Modal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [newName, setNewName] = useState("");

  const onFormSubmit =
    ("submit",
    (event) => {
      event.preventDefault();

      newName.trim().length > 0 && dispatch(addExcercise(newName.trim()));
      toggleModal();
    });

  useEffect(() => inputRef.current.focus(), []);

  return (
    <ModalWrapper>
      <ModalTile>
        <form>
          <input
            placeholder="nazwa ćwiczenia"
            value={newName}
            type="text"
            ref={inputRef}
            onChange={(event) => setNewName(event.target.value)}
          />
          <button onClick={(event) => onFormSubmit(event)}>Zapisz</button>
          <button onClick={() => toggleModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default Modal;
