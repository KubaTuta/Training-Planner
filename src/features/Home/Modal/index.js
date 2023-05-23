import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUnit } from "../unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const Modal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [newName, setNewName] = useState("");

  const onFormSubmit =
    ("submit",
    (event) => {
      event.preventDefault();
      newName.trim().length > 0 && dispatch(addUnit(newName.trim()));
      toggleModal();
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
          <button onClick={(event) => onFormSubmit(event)}>Zapisz</button>
          <button onClick={() => toggleModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default Modal;
