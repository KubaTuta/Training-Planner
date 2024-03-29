import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { editDate } from "../../Home/unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const EditModal = ({ id, toggleEditModal }) => {
  const dispatch = useDispatch();

  const [newDate, setNewDate] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event, id) => {
    event.preventDefault();
    newDate && dispatch(editDate({ id, newDate }));
    toggleEditModal();
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <ModalWrapper>
      <ModalTile>
        <form>
          <input
            value={newDate}
            type="date"
            ref={inputRef}
            onChange={(event) => setNewDate(event.target.value)}
          />
          <button onClick={(event) => onFormSubmit(event, id)}>Zapisz</button>
          <button onClick={() => toggleEditModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default EditModal;
