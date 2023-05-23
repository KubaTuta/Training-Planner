import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { addSession } from "../../Home/unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const Modal = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const [newDate, setNewDate] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    newDate && dispatch(addSession(newDate));
    toggleModal();
  };

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
          <button onClick={(event) => onFormSubmit(event)}>Zapisz</button>
          <button onClick={() => toggleModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default Modal;
